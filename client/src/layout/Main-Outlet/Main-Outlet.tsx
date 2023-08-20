import { Outlet } from "react-router-dom";

import styles from './Main-Outlet.module.scss'
import { Footer } from "../../component/Footer/Footer.tsx";

export const MainOutlet = () => {
   return (
       <div className={styles.MainOutlet}>
          <Outlet/>
          <Footer/>
       </div>
   );
};