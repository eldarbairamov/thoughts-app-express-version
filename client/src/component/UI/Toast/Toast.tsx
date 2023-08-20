import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "../../../style/toastify-variables.scss";
import "../../../style/toastify-classes.scss";
import { useAppSelector } from "../../../hook/redux.hook.ts";
import { useEffect } from "react";

export const Toast = () => {
   const { error } = useAppSelector( state => state.appReducer );

   useEffect( () => {
      if ( error ) {
         toast.error( error, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            closeButton: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
         } );
      }
   }, [ error ] );

   return (
       <div>
          <ToastContainer/>
       </div>
   );
};