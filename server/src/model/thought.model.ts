import { MongooseDocument } from "../interface";
import { model, ObjectId, Schema, Types } from "mongoose";

interface IThoughtModel extends MongooseDocument {
   readonly ownerId: ObjectId,
   readonly content: string,
   date: number
}

const ThoughtSchema: Schema = new Schema( {
   ownerId: { type: Types.ObjectId, ref: "User", required: true },
   content: { type: String, required: true },
   date: { type: Number }
}, { versionKey: false, timestamps: false } );

ThoughtSchema.pre<IThoughtModel>( "save", function () {
   this.date = new Date().getTime();
} );

export const ThoughtModel = model<IThoughtModel>( "Thought", ThoughtSchema );