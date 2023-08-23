import styles from "./Thought-Item.module.scss";
import moment from "moment/moment";
import { Button } from "../UI/Button/Button.tsx";
import { IThought } from "../../interface/thought.interface.ts";
import { pickSomeBg } from "../../util/pick-some-bg.ts";
import { useAppDispatch, useAppSelector } from "../../hook";
import { asyncThoughtActions } from "../../store/slice/thought.slice.ts";
import { forwardRef } from "react";

export const ThoughtItem = forwardRef( ( { thought }: { thought: IThought }, ref: any ) => {
   const { limit } = useAppSelector( state => state.thoughtReducer );

   const dispatch = useAppDispatch();

   const deleteThought = async () => {
      dispatch( asyncThoughtActions.deleteThought( { thoughtId: thought._id, limit } ) );
   };

   return (
       <div className={ styles.ThoughtItem } style={ { background: pickSomeBg() } } ref={ ref }>
          <p> { moment( +thought.date ).format( "DD-MM-YYYY, HH:mm" ) } </p>
          <p> { thought.content } </p>
          <Button text={ "delete" } onClick={ deleteThought }/>
       </div>
   );
} );