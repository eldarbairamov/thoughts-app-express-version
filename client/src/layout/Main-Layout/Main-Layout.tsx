import styles from "./Main-Layout.module.scss";
import { MainOutlet } from "../Main-Outlet/Main-Outlet.tsx";
import { Navbar } from "../../component/Navbar/Navbar.tsx";

export const MainLayout = () => {
   return (
       <div className={ styles.MainLayout }>
          <Navbar/>
          <MainOutlet/>
       </div>
   );
};