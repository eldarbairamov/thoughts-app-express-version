import express, { Application } from "express";
import cors from "cors";
import { errorMiddleware } from "./middleware";
import mongoose from "mongoose";
import { appRouter } from "./router";
import { CYAN_COLOR, ERROR } from "./constant/colors.constant";

const app: Application = express();

app.use( express.json() )
    .use( express.urlencoded( { extended: true } ) )
    .use( cors( { origin: "*" } ) )
    .use( appRouter )
    .use( errorMiddleware );

const start = async () => {
   await mongoose.connect( "mongodb://localhost:27017/thoughts-app" ).catch( ( e: Error ) => {
      throw Error( `Database error: ${ e.message }` );
   } );
   app.listen( 5300 );
};

start()
    .then( () => console.log( CYAN_COLOR, "Database is connected. Server is started on 5300 port." ) )
    .catch( ( e ) => console.log( ERROR, e ) );