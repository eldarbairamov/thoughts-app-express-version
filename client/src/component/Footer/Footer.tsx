import styles from "./Footer.module.scss";
import { Colors } from "../Colors/Colors.tsx";
import { ThemeSwitcher } from "../UI/Theme-Switcher/Theme-Switcher.tsx";

export const Footer = () => {
   return (
       <div className={ styles.Footer }>

          <ThemeSwitcher/>

          <Colors/>

       </div>
   );
};