import bcrypt from "bcrypt";
import { ILogin, ISuccessLogin } from "../../interface";
import { OAuthModel, User } from "../../model";
import { ApiException } from "../../exception";
import jwt from "jsonwebtoken";

export const loginService = async ( data: ILogin ): Promise<ISuccessLogin> => {
   const user = await User.findOne( { email: data.email } );
   const isPasswordValid = user ? await bcrypt.compare( data.password, user.password ) : null;

   if ( !user || !isPasswordValid ) throw new ApiException( "Wrong email or password", 401 );

   const tokenPair = {
      accessToken: jwt.sign( { userId: user.id, }, "secret-access-key", { expiresIn: "1d" } ),
      refreshToken: jwt.sign( { userId: user.id }, "secret-refresh-key", { expiresIn: "7d" } )
   };

   await OAuthModel.create( { ownerId: user.id, ...tokenPair } );

   return { username: user.username, ...tokenPair };
};