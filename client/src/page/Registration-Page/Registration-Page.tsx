import styles from "./Registration-Page.module.scss";
import { RegistrationForm } from "../../component/Registration-Form/Registration-Form.tsx";
import { Footer } from "../../component/Footer/Footer.tsx";

export const RegistrationPage = () => {
   return (
       <div className={ styles.RegistrationPage }>

          <div className={ styles.top }>
             <p> th </p>

             <Footer/>

             <div className={styles.typing_wrapper}>
                <h2> Registration </h2>
             </div>
          </div>

          <RegistrationForm/>

       </div>
   );
};