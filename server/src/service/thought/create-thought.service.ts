import { ObjectId } from "mongoose";
import { IThought } from "../../interface";
import { ThoughtModel } from "../../model";
import { validationService } from "../validation.service";
import { thoughtValidator } from "../../validator/thought.validator";

export const createThoughtService = async ( userId: ObjectId, content: string ): Promise<IThought> => {
   await validationService( thoughtValidator, { content } );
   return ThoughtModel.create( { ownerId: userId, content: content } );
};