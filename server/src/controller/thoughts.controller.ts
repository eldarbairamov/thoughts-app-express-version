import expressAsyncHandler from "express-async-handler";
import { Response } from "express";
import { ISuccessMessage, IThought, TypedRequest } from "../interface";
import { createThoughtService, deleteThoughtService, getAllThoughtsService } from "../service";

export const thoughtsController = {

   getAll: expressAsyncHandler( async ( req: TypedRequest<any, any, any>, res: Response<IThought[]> ) => {
      const thoughtList = await getAllThoughtsService( req.userId! );
      res.json( thoughtList );
   } ),

   create: expressAsyncHandler( async ( req: TypedRequest<Pick<IThought, "content">, any, any>, res: Response<IThought> ) => {
      const thought = await createThoughtService( req.userId!, req.body.content );
      res.json( thought );
   } ),

   delete: expressAsyncHandler( async ( req: TypedRequest<any, { thoughtId: string }, any>, res: Response<ISuccessMessage> ) => {
      await deleteThoughtService( req.params.thoughtId );
      res.json( { message: "Success" } );
   } )

};