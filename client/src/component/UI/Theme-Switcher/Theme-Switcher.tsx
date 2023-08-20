import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { appActions } from "../../../store/slice/app.slice.ts";
import { useAppDispatch, useAppSelector } from "../../../hook/redux.hook.ts";

import styles from './Theme-Switcher.module.scss'

export const ThemeSwitcher = () => {
   const { theme } = useAppSelector( state => state.appReducer );

   const dispatch = useAppDispatch();

   return (
       <div className={ styles.ThemeSwitcher}>

          { theme === "light" ?
              <BsFillMoonStarsFill size={ 20 }
                                   onClick={ () => dispatch( appActions.setTheme( "dark" ) ) }/> :
              <BsFillSunFill size={ 25 }
                             color={ "white" }
                             onClick={ () => dispatch( appActions.setTheme( "light" ) ) }/> }

       </div>
   )
}