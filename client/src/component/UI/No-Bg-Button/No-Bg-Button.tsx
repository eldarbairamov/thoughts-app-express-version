import { CSSProperties, FC } from "react";

import styles from "./No-Bg-Button.module.scss";

interface INoBgButtonProps {
   text: string,
   onClick?: () => void,
   style?: CSSProperties,
}

export const NoBgButton: FC<INoBgButtonProps> = ( { text, onClick, style } ) => {
   return (
       <button className={ styles.NoBgButton } onClick={ onClick } style={ style }> { text } </button>
   );
};