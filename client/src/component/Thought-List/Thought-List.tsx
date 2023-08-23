import styles from "./Thought-List.module.scss";
import { ThoughtItem } from "../Thought-Item/Thought-Item.tsx";
import { v4 } from "uuid";
import { useSpring, animated } from "@react-spring/web";
import { useAppDispatch, useAppSelector, userObserver } from "../../hook";
import { thoughtActions } from "../../store/slice/thought.slice.ts";

export const ThoughtList = () => {
   const [ props ] = useSpring(
       () => ({
          from: { opacity: 0 },
          to: { opacity: 1 },
       })
   );

   const { thoughts } = useAppSelector( state => state.thoughtReducer );

   const dispatch = useAppDispatch();

   const { lastElementRef } = userObserver( () => {
      dispatch( thoughtActions.limitIncrease() );
   } );

   return (
       <animated.div style={ props } className={ styles.ThoughtList }>
          { Boolean( thoughts.length ) && thoughts.map( ( t, i ) => {
             if ( thoughts.length === i + 1 ) {
                return <ThoughtItem thought={ t } key={ v4() } ref={ lastElementRef }/>;
             }
             else {
                return <ThoughtItem thought={ t } key={ v4() }/>;
             }
          } ) }
       </animated.div>
   );
};