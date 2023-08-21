import process from "process";
import { Secret } from "jsonwebtoken";

export const config = {
   PORT: process.env.PORT || 5300,

   SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY as Secret,
   SECRET_REFRESH_KEY: process.env.SECRET_REFRESH_KEY as Secret,

   MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/thoughts-app"
};