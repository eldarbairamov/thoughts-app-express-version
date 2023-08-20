import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { asyncThoughtActions } from "../slice/thought.slice.ts";
import { asyncAuthActions } from "../slice/auth.slice.ts";
import { appActions } from "../slice/app.slice.ts";

export const toastMiddleware = createListenerMiddleware();

toastMiddleware.startListening( {
   matcher: isAnyOf(
       asyncThoughtActions.deleteThought.rejected,
       asyncThoughtActions.getAllThoughts.rejected,
       asyncThoughtActions.writeThought.rejected,
       asyncAuthActions.login.rejected,
       asyncAuthActions.logout.rejected
   ),
   effect: ( action, api ) => {
      const dispatch = api.dispatch;

      const message = action.payload;

      dispatch( appActions.setError( message ) );
   }
} );