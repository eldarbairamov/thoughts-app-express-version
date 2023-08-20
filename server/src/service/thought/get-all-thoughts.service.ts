import { ObjectId } from "mongoose";
import { ThoughtModel } from "../../model";
import { IThought } from "../../interface";

export const getAllThoughtsService = async ( userId: ObjectId ): Promise<IThought[]> => {
   return ThoughtModel.find( { ownerId: userId } );
};