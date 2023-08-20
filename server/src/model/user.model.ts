import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { MongooseDocument } from "../interface";

interface IUser extends MongooseDocument {
   username: string,
   email: string,
   password: string
}

const UserSchema: Schema = new Schema( {
   email: { type: String, required: true, unique: true },
   username: { type: String, required: true, unique: true },
   password: { type: String, required: true },
}, { versionKey: false } );

UserSchema.pre<IUser>( "save", async function () {
   const hashedPass = await bcrypt.hash( this.password, 8 ).catch( e => console.log( e ) );
   this.password = hashedPass as string
} );

UserSchema.pre<IUser>( "updateOne", async function () {
   const hashedPass = await bcrypt.hash( this.password, 8 ).catch( e => console.log( e ) );
   this.password = hashedPass as string
} );

export const User = model<IUser>( "User", UserSchema );


