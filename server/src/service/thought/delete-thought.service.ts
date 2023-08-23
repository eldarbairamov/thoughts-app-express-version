import { ThoughtModel } from "../../model";
import { ApiException } from "../../exception";
import { IThoughtResponse } from "../../interface";
import { ObjectId } from "mongoose";

export const deleteThoughtService = async ( thoughtId: string, userId: ObjectId, limit: string ): Promise<IThoughtResponse> => {
   const target = await ThoughtModel.findOne( { _id: thoughtId } );
   if ( !target ) throw new ApiException( "Requested object does not exists", 400 );

   await target.deleteOne()

   const [ thoughtList, count ] = await Promise.all( [
      ThoughtModel.find( { ownerId: userId } ).limit( +limit ),
      ThoughtModel.count()
   ] );

   return { data: thoughtList, count };
};