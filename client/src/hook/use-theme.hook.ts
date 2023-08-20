import { useLayoutEffect } from "react";
import { useAppSelector } from "./redux.hook.ts";

export const useTheme = () => {
   const { theme } = useAppSelector( state => state.appReducer );

   useLayoutEffect( () => {
      document.documentElement.setAttribute( "data-theme", theme );
   }, [theme] );

};