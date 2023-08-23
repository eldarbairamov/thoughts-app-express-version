import { ObjectId } from "mongoose";
import { ThoughtModel } from "../../model";
import { IThoughtResponse } from "../../interface";

export const getAllThoughtsService = async ( userId: ObjectId, limit: string ): Promise<IThoughtResponse> => {
   const [ thoughtList, count ] = await Promise.all( [
      ThoughtModel.find( { ownerId: userId } ).limit( +limit ),
      ThoughtModel.count()
   ] );

   return { data: thoughtList, count };
};