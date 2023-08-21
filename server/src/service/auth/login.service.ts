import * as bcrypt from "bcrypt";
import { ILogin, ISuccessLogin } from "../../interface";
import { OAuthModel, User } from "../../model";
import { ApiException } from "../../exception";
import jwt from "jsonwebtoken";
import { validationService } from "../validation.service";
import { loginValidator } from "../../validator/auth.validator";
import { config } from "../../config";

export const loginService = async ( data: ILogin ): Promise<ISuccessLogin> => {
   await validationService( loginValidator, data );

   const user = await User.findOne( { email: data.email } );
   const isPasswordValid = user ? await bcrypt.compare( data.password, user.password ) : null;

   if ( !user || !isPasswordValid ) throw new ApiException( "Wrong email or password", 401 );

   const tokenPair = {
      accessToken: jwt.sign( { userId: user.id, }, config.SECRET_ACCESS_KEY, { expiresIn: "1d" } ),
      refreshToken: jwt.sign( { userId: user.id }, config.SECRET_REFRESH_KEY, { expiresIn: "7d" } )
   };

   await OAuthModel.create( { ownerId: user.id, ...tokenPair } );

   return { username: user.username, ...tokenPair };
};