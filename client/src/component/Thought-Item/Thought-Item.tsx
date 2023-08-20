import styles from "./Thought-Item.module.scss";
import moment from "moment/moment";
import { Button } from "../UI/Button/Button.tsx";
import { IThought } from "../../interface/thought.interface.ts";
import { pickSomeBg } from "../../util/pick-some-bg.ts";
import { useAppDispatch } from "../../hook/redux.hook.ts";
import { asyncThoughtActions } from "../../store/slice/thought.slice.ts";

export const ThoughtItem = ( { thought }: { thought: IThought } ) => {
   const dispatch = useAppDispatch();

   const deleteThought = async () => {
      dispatch( asyncThoughtActions.deleteThought( { thoughtId: thought.id } ) );
   };

   return (
       <div className={ styles.ThoughtItem } style={ { background: pickSomeBg() } }>
          <p> { moment( +thought.date ).format( "DD-MM-YYYY, HH:mm" ) } </p>
          <p> { thought.content } </p>
          <Button text={ "delete" } onClick={ deleteThought }/>
       </div>
   );
};