import { IRegistration } from "../../interface";
import { User } from "../../model";
import { ApiException } from "../../exception";
import { registrationValidator } from "../../validator/auth.validator";
import { validationService } from "../validation.service";

export const registrationService = async ( data: IRegistration ): Promise<void> => {
   await validationService( registrationValidator, data );

   const [ email, username ] = await Promise.all( [
      User.findOne( { email: data.email } ),
      User.findOne( { username: data.username } )
   ] );

   if ( email ) throw new ApiException( "This email is already in use", 409 );
   if ( username ) throw new ApiException( "This username is already in use", 409 );

   await User.create( { ...data } );

};