import { ObjectId } from "mongoose";
import { IThought } from "../../interface";
import { ThoughtModel } from "../../model";

export const createThoughtService = async ( userId: ObjectId, content: string ): Promise<IThought> => {
   return ThoughtModel.create( { ownerId: userId, content: content } );
};