import * as yup from "yup";
import { ILogin, IRegistration } from "../interface";

export const registrationValidator: yup.ObjectSchema<IRegistration> = yup.object().shape( {
   username: yup.string().required(),
   email: yup.string().email().required(),
   password: yup.string().min( 8 ).max( 20 ).required()
} );

export const loginValidator: yup.ObjectSchema<ILogin> = yup.object().shape( {
   email: yup.string().email().required(),
   password: yup.string().min( 8 ).max( 20 ).required()
} );

