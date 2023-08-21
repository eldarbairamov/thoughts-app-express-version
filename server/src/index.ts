import "dotenv/config";
import express, { Application } from "express";
import cors from "cors";
import { errorMiddleware } from "./middleware";
import mongoose from "mongoose";
import { appRouter } from "./router";
import { CYAN_COLOR, ERROR } from "./constant/colors.constant";
import { config } from "./config";

const app: Application = express();

app.use( express.json() )
    .use( express.urlencoded( { extended: true } ) )
    .use( cors( { origin: "*" } ) )
    .use( appRouter )
    .use( errorMiddleware );

const start = async () => {
   await mongoose.connect( config.MONGO_URI ).catch( ( e: Error ) => {
      throw Error( `Database error: ${ e.message }` );
   } );
   app.listen( config.PORT );
};

start()
    .then( () => console.log( CYAN_COLOR, `Database is connected. Server is started on ${ config.PORT } port.` ) )
    .catch( ( e ) => console.log( ERROR, e ) );