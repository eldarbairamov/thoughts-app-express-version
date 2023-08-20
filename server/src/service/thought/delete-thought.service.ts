import { ThoughtModel } from "../../model";
import { ApiException } from "../../exception";

export const deleteThoughtService = async ( thoughtId: string ) => {
   const target = await ThoughtModel.findOne( { _id: thoughtId } );
   if ( !target ) throw new ApiException( "Requested object does not exists", 400 );

   await target.deleteOne()
};