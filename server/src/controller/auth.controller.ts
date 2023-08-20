import expressAsyncHandler from "express-async-handler";
import { Response } from "express";
import { ILogin, IRefresh, IRegistration, ISuccessLogin, ISuccessMessage, TypedRequest } from "../interface";
import { loginService, logoutService, refreshService, registrationService } from "../service";

export const authController = {

   registration: expressAsyncHandler( async ( req: TypedRequest<IRegistration, any, any>, res: Response<ISuccessMessage> ) => {
      await registrationService( req.body );
      res.status( 201 ).json( { message: "Success" } );
   } ),

   login: expressAsyncHandler( async ( req: TypedRequest<ILogin, any, any>, res: Response<ISuccessLogin> ) => {
      const result = await loginService( req.body );
      res.status( 201 ).json( result );
   } ),

   logout: expressAsyncHandler( async ( req: TypedRequest<any, any, any>, res: Response<ISuccessMessage> ) => {
      await logoutService( req.token! );
      res.json( { message: "Success" } );
   } ),

   refresh: expressAsyncHandler( async ( req: TypedRequest<IRefresh, any, any>, res: Response<Omit<ISuccessLogin, 'username'>> ) => {
      const result = await refreshService( req.body.refreshToken, req.userId! );
      res.status( 201 ).json( result );
   } )

};