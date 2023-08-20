import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";
import { OAuthModel } from "../../model";
import { ISuccessLogin } from "../../interface";
import { ApiException } from "../../exception";

export const refreshService = async ( refreshToken: string, userId: ObjectId ): Promise<Omit<ISuccessLogin, "username">> => {
   const isTokenValid = await OAuthModel.findOne( { refreshToken } );
   const isTokenAlive = jwt.verify( refreshToken, "secret-refresh-key" );

   if ( !isTokenValid || !isTokenAlive ) throw new ApiException( "Invalid or expired token", 401 );

   await OAuthModel.deleteOne( { refreshToken } );

   const tokenPair = {
      accessToken: jwt.sign( { userId }, "secret-access-key", { expiresIn: "1d" } ),
      refreshToken: jwt.sign( { userId }, "secret-refresh-key", { expiresIn: "7d" } )
   };

   await OAuthModel.create( { ownerId: userId, ...tokenPair } );

   return tokenPair;
};