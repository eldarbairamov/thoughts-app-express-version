import styles from "./Navbar.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { NoBgButton } from "../UI/No-Bg-Button/No-Bg-Button.tsx";
import { useAppDispatch } from "../../hook/redux.hook.ts";
import { asyncAuthActions } from "../../store/slice/auth.slice.ts";

export const Navbar = () => {
   const dispatch = useAppDispatch();

   const navigate = useNavigate();

   const logout = async () => {
      await dispatch( asyncAuthActions.logout() );
      navigate( "/login" );
   };

   return (
       <div className={ styles.Navbar }>

          <p className={ styles.logo }> th </p>

          <NavLink to={ "/" }> write </NavLink>
          <NavLink to={ "/list-of-thoughts" }> list of thoughts </NavLink>

          <NoBgButton text={ "logout" }
                      onClick={ logout }
                      style={ { position: "absolute", right: 50, fontStyle: "italic", fontWeight: 700 } }/>

       </div>
   );
};