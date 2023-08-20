import styles from "./Login-Page.module.scss";
import { LoginForm } from "../../component/Login-Form/Login-Form.tsx";
import { Footer } from "../../component/Footer/Footer.tsx";

export const LoginPage = () => {
   return (
       <div className={ styles.LoginPage }>

          <div className={styles.top}>
             <p> th </p>

             <div className={styles.typing_wrapper}>
                <h2> Login </h2>
             </div>
          </div>

          <LoginForm/>

          <Footer/>

       </div>
   );
};