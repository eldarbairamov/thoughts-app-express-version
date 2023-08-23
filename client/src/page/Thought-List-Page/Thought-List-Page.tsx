import { useEffect } from "react";

import styles from "./Thought-List-Page.module.scss";
import { useAppDispatch, useAppSelector } from "../../hook";
import { asyncThoughtActions } from "../../store/slice/thought.slice.ts";
import { ThoughtList } from "../../component/Thought-List/Thought-List.tsx";

export const ThoughtListPage = () => {
   const { limit } = useAppSelector( state => state.thoughtReducer );
   const dispatch = useAppDispatch();

   useEffect( () => {
      dispatch( asyncThoughtActions.getAllThoughts( { limit } ) );
   }, [ limit ] );

   return (
       <div className={ styles.ThoughtListPage }>

          <ThoughtList/>

       </div>
   );
};