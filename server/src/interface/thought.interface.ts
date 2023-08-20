import { ObjectId } from "mongoose";

export interface IThought {
   readonly ownerId: ObjectId,
   readonly content: string,
   readonly date: number
}