import { Request } from "express";
import { ObjectId } from "mongoose";

export interface TypedRequest<B, P, Q> extends Request<P, {}, B, Q> {
   userId?: ObjectId,
   token?: string
}

export interface ISuccessMessage {
   message: string
}