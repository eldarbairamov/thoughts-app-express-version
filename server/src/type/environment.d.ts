import { Secret } from "jsonwebtoken";

export {};

declare global {
   namespace NodeJS {
      interface ProcessEnv {
         PORT: number,
         SECRET_REFRESH_KEY: Secret,
         SECRET_ACCESS_KEY: Secret
      }
   }
}