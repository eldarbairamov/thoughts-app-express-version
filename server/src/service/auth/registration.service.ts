import { IRegistration } from "../../interface";
import { User } from "../../model";
import { ApiException } from "../../exception";

export const registrationService = async ( data: IRegistration ): Promise<void> => {
   const [ email, username ] = await Promise.all( [
      User.findOne( { email: data.email } ),
      User.findOne( { username: data.username } )
   ] );

   if ( email ) throw new ApiException( "This email is already in use", 409 );
   if ( username ) throw new ApiException( "This username is already in use", 409 );

   await User.create( { ...data } );

};