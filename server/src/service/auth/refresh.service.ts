import jwt from "jsonwebtoken";
import { OAuthModel } from "../../model";
import { ISuccessLogin } from "../../interface";
import { ApiException } from "../../exception";
import { ObjectId } from "mongoose";
import { config } from "../../config";

export const refreshService = async ( refreshToken: string ): Promise<Omit<ISuccessLogin, "username">> => {
   const isTokenValid = await OAuthModel.findOne( { refreshToken } );

   if ( !isTokenValid ) throw new ApiException( "Invalid or expired token", 401 );

   jwt.verify( refreshToken, config.SECRET_REFRESH_KEY, ( error ) => {
      if ( error ) throw new ApiException( "Invalid or expired token", 401 );
   } );

   const { userId } = jwt.decode( refreshToken ) as { userId: ObjectId };

   await OAuthModel.deleteOne( { refreshToken } );

   const tokenPair = {
      accessToken: jwt.sign( {}, config.SECRET_ACCESS_KEY, { expiresIn: "1d" } ),
      refreshToken: jwt.sign( { userId }, config.SECRET_REFRESH_KEY, { expiresIn: "7d" } )
   };

   await OAuthModel.create( { ownerId: userId, ...tokenPair } );

   return tokenPair;
};