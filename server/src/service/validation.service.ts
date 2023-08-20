import * as yup from "yup";
import { ILogin, IRegistration } from "../interface";
import { ApiException } from "../exception";

type validatorType = yup.ObjectSchema<ILogin | IRegistration | { content: string }>
type dataType = ILogin | IRegistration | { content: string }

export const validationService = async ( validator: validatorType, data: dataType ) => {
   await validator.validate( data, { strict: true } ).catch( ( e ) => {
          throw new ApiException( `Validation error: ${ e.errors[0] }`, 400 );
       }
   );
};