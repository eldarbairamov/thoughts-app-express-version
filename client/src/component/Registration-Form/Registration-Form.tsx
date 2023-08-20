import styles from "./Registration-Form.module.scss";
import { Button } from "../UI/Button/Button.tsx";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { authApi } from "../../api/auth.api.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationValidator } from "../../validator/auth.validator.ts";
import { FormControl } from "../UI/Form-Control/Form-Control.tsx";

export const RegistrationForm = () => {
   const navigate: any = useNavigate();

   const { register, handleSubmit, formState: { errors } } = useForm( {
      mode: "onTouched",
      resolver: yupResolver( registrationValidator )
   } );

   const onSubmit = async ( data: any ) => {
      try {
         await authApi.registration( data );
         navigate( "/login" );
      }
      catch ( e ) {
         console.log( e );
      }
   };

   return (
       <div className={ styles.RegistrationForm }>

          <form className={ styles.form_wrapper } onSubmit={ handleSubmit( onSubmit ) }>
             <FormControl register={ register }
                          error={ errors.username?.message }
                          fieldName={ "username" }
                          labelName={ "username" }
                          isPassword={ false }/>

             <FormControl register={ register }
                          error={ errors.email?.message }
                          fieldName={ "email" }
                          labelName={ "email" }
                          isPassword={ false }/>

             <FormControl register={ register }
                          error={ errors.password?.message }
                          fieldName={ "password" }
                          labelName={ "password" }
                          isPassword={ true }/>

             <Button text={ "let's go" } style={ { width: "100%" } }/>
          </form>

          <div className={ styles.info }>
             <p> If you already have an account, just </p>
             <p onClick={ () => navigate( "/login" ) }> login </p>
          </div>

       </div>
   );
};