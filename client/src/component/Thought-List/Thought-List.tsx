import styles from "./Thought-List.module.scss";
import { useAppSelector } from "../../hook/redux.hook.ts";
import { ThoughtItem } from "../Thought-Item/Thought-Item.tsx";
import { v4 } from "uuid";
import { useSpring, animated } from "@react-spring/web";

export const ThoughtList = () => {
   const [ props ] = useSpring(
       () => ({
          from: { opacity: 0 },
          to: { opacity: 1 },
       })
   );

   const { thoughts } = useAppSelector( state => state.thoughtReducer );

   return (
       <animated.div style={props} className={ styles.ThoughtList }>
          { Boolean( thoughts.length ) && thoughts.map( t => <ThoughtItem thought={ t } key={ v4() }/> ) }
       </animated.div>
   );
};