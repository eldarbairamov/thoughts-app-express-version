import styles from "./Error.module.scss";
import { useRouteError } from "react-router-dom";

export const Error = () => {
   const error: any = useRouteError();

   return (
       <div className={ styles.Error }>

          <p>
             Oh! Seems that you've got an error: "{ error.statusText }"
          </p>
       </div>
   );
};