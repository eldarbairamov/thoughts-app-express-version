import { CSSProperties, FC } from "react";

import styles from "./Button.module.scss";

interface IButtonProps {
   text: string,
   onClick?: () => void,
   style?: CSSProperties,
}

export const Button: FC<IButtonProps> = ( { text, onClick, style } ) => {
   return (
       <button className={ styles.Button } onClick={ onClick } style={ style }> { text } </button>
   );
};