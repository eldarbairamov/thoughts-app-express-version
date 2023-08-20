import styles from "./Login-Form.module.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "../UI/Button/Button.tsx";
import { useForm } from "react-hook-form";
import { ILogin } from "../../interface/auth.interface.ts";
import { useAppDispatch } from "../../hook/redux.hook.ts";
import { asyncAuthActions } from "../../store/slice/auth.slice.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidator } from "../../validator/auth.validator.ts";
import { FormControl } from "../UI/Form-Control/Form-Control.tsx";

export const LoginForm = () => {
   const { register, handleSubmit, formState: { errors } } = useForm<ILogin>( {
      mode: "onTouched",
      resolver: yupResolver( loginValidator )
   } );

   const navigate = useNavigate();

   const dispatch = useAppDispatch();

   const onSubmit = async ( data: ILogin ) => {
      await dispatch( asyncAuthActions.login( { body: data } ) );
      navigate( "/write" );
   };

   return (
       <div className={ styles.LoginForm }>

          <form className={ styles.form_wrapper } onSubmit={ handleSubmit( onSubmit ) }>
             <FormControl register={register}
                          error={errors.email?.message}
                          fieldName={'email'}
                          labelName={'email'}
                          isPassword={false}/>

             <FormControl register={register}
                          error={errors.password?.message}
                          fieldName={'password'}
                          labelName={'password'}
                          isPassword={true}/>

             <Button text={ "login" } style={ { width: "100%" } }/>
          </form>

          <div className={ styles.info }>
             <p> Hurry up and create a </p>
             <p onClick={ () => navigate( "/registration" ) }> new account </p>
          </div>

       </div>
   );
};