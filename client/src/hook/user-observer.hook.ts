import { useCallback, useRef } from "react";

export const userObserver = ( next: () => void ) => {
   const observer = useRef<any>();

   const lastElementRef = useCallback( ( node: any ) => {
      if ( observer.current ) observer.current.disconnect();

      observer.current = new IntersectionObserver( ( [ entry ] ) => {
         if ( entry.isIntersecting ) {
            next();
         }
      } );

      if ( node ) observer.current.observe( node );

   }, [] );

   return { lastElementRef };

};