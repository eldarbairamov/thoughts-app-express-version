import { useState } from "react";

import { COLOR1, COLOR1_HOVER, COLOR2, COLOR2_HOVER, COLOR3, COLOR3_HOVER, COLOR4, COLOR4_HOVER } from "../../constant/colors.constant.ts";
import styles from "./Colors.module.scss";

export const Colors = () => {
   const [ color, setColor ] = useState<string>( "color1" );

   const color1 = () => {
      document.documentElement.style.setProperty( "--main-color", COLOR1 );
      document.documentElement.style.setProperty( "--main-color-hover", COLOR1_HOVER );
      setColor( "color1" );
   };

   const color2 = () => {
      document.documentElement.style.setProperty( "--main-color", COLOR2 );
      document.documentElement.style.setProperty( "--main-color-hover", COLOR2_HOVER );
      setColor( "color2" );
   };

   const color3 = () => {
      document.documentElement.style.setProperty( "--main-color", COLOR3 );
      document.documentElement.style.setProperty( "--main-color-hover", COLOR3_HOVER );
      setColor( "color3" );
   };

   const color4 = () => {
      document.documentElement.style.setProperty( "--main-color", COLOR4 );
      document.documentElement.style.setProperty( "--main-color-hover", COLOR4_HOVER );
      setColor( "color4" );
   };

   return (
       <div className={ styles.Colors }>
          <div className={ styles.color1 } onClick={ color1 } data-color={ color }></div>
          <div className={ styles.color2 } onClick={ color2 } data-color={ color }></div>
          <div className={ styles.color3 } onClick={ color3 } data-color={ color }></div>
          <div className={ styles.color4 } onClick={ color4 } data-color={ color }></div>
       </div>
   )
}