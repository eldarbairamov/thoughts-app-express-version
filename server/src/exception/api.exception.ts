export class ApiException extends Error {

   constructor(message: string, public status: number) {
      super(message);
      this.status = status
   }

}