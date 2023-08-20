import { MongooseDocument } from "../interface";
import { model, Schema, Types, ObjectId } from "mongoose";

interface IOAuthModel extends MongooseDocument {
   readonly ownerId: ObjectId,
   readonly accessToken: string,
   readonly refreshToken: string
}

export const OAuthSchema: Schema = new Schema( {
   ownerId: { type: Types.ObjectId, ref: "User", required: true },
   accessToken: { type: String, required: true },
   refreshToken: { type: String, required: true }
}, { versionKey: false } );

export const OAuthModel = model<IOAuthModel>( "OAuth", OAuthSchema );