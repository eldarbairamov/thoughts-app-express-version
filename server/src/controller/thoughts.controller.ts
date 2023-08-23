import expressAsyncHandler from "express-async-handler";
import { Response } from "express";
import { IThought, IThoughts, TypedRequest } from "../interface";
import { createThoughtService, deleteThoughtService, getAllThoughtsService } from "../service";

export const thoughtsController = {

   getAll: expressAsyncHandler( async ( req: TypedRequest<any, any, { limit: string }>, res: Response<IThoughts> ) => {
      const thoughtList = await getAllThoughtsService( req.userId!, req.query.limit );
      res.json( thoughtList );
   } ),

   create: expressAsyncHandler( async ( req: TypedRequest<Pick<IThought, "content">, any, any>, res: Response<IThought> ) => {
      const thought = await createThoughtService( req.userId!, req.body.content );
      res.json( thought );
   } ),

   delete: expressAsyncHandler( async ( req: TypedRequest<any, { thoughtId: string }, { limit: string }>, res: Response<IThoughts> ) => {
      const thoughtList = await deleteThoughtService( req.params.thoughtId, req.userId!, req.query.limit );
      res.json(thoughtList );
   } )

};