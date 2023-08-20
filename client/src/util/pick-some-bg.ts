import { thoughtColors } from "../constant/thought-colors.constant.ts";

export const pickSomeBg = () => {
   const randomNumber = Math.random() * 12;
   const randomInteger = Math.floor( randomNumber );

   return thoughtColors[randomInteger];
};