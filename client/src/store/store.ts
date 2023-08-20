import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slice/auth.slice.ts";
import { thoughtReducer } from "./slice/thought.slice.ts";
import { appReducer } from "./slice/app.slice.ts";
import { toastMiddleware } from "./middleware/toast.middleware.ts";

export const store = configureStore( {
   reducer: {
      authReducer,
      thoughtReducer,
      appReducer
   },
   middleware: ( gdm ) => gdm().concat( toastMiddleware.middleware )
} );

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch