import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { ApiException } from "../exception";
import expressAsyncHandler from "express-async-handler";
import { TypedRequest } from "../interface";
import { OAuthModel } from "../model";
import { config } from "../config";

export const authMiddleware = {

   accessControl: expressAsyncHandler( async ( req: TypedRequest<any, any, any>, res: Response, next: NextFunction ) => {
      const accessToken = req.headers.authorization?.replace( "Bearer", " " ).trim();

      if ( !accessToken ) throw new ApiException( "Invalid or expired token", 401 );

      const isTokenValid = await OAuthModel.findOne( { accessToken } );

      if ( !isTokenValid ) throw new ApiException( "Invalid or expired token", 401 );

      jwt.verify( accessToken, config.SECRET_ACCESS_KEY, ( error ) => {
         if ( error ) throw new ApiException( "Invalid or expired token", 401 );
      } );

      req.userId = isTokenValid.ownerId;
      req.token = isTokenValid.accessToken;

      next();
   } )

};