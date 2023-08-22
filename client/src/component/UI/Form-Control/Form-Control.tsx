import { FC, useState } from "react";
import { UseFormRegister } from "react-hook-form";

import styles from "./Form-Control.module.scss";

interface IFormControlProps {
   register: UseFormRegister<any>,
   error: string | undefined,
   fieldName: "email" | "password" | "username",
   labelName: "email" | "password" | "username",
   isPassword: boolean,
}

export const FormControl: FC<IFormControlProps> = ( { register, error, fieldName, labelName, isPassword } ) => {
   const [ isHide, setIsHide ] = useState<boolean>( isPassword );

   return (
       <div className={ styles.FormControl }>
          <div className={ styles.form_labels }>
             <label htmlFor={ fieldName }> { labelName } </label>
             { isPassword && <label onClick={ () => setIsHide( !isHide ) }> { !isHide ? "hide" : "show" } </label> }
          </div>
          <input type={ isHide ? "password" : "text" } id={ fieldName } { ...register( fieldName ) } />
          <p> { error && error } </p>
       </div>
   );
};
