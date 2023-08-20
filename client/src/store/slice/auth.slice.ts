import { createSlice } from "@reduxjs/toolkit";
import { storageApi } from "../../api/storage.api.ts";
import { login, logout } from "../thunk/auth.thunk.ts";

interface IInitialState {
   isLogin: boolean,
   username: string | undefined | null,
   error: string | undefined
}

export const initialState: IInitialState = {
   isLogin: Boolean( storageApi.getAccessToken() ),
   username: storageApi.getUsername(),
   error: undefined
};

const authSlice = createSlice( {
   name: "auth",
   initialState,
   reducers: {},
   extraReducers: ( builder ) => {
      builder.addCase( login.fulfilled, ( state, { payload } ) => {
         state.isLogin = true;
         state.username = payload.username;
         storageApi.setTokens( payload.accessToken, payload.refreshToken );
         storageApi.setUsername(payload.username)
      } );
      builder.addCase( login.rejected, ( state, { payload } ) => {
         state.error = payload;
      } );

      builder.addCase( logout.fulfilled, ( state ) => {
         state.isLogin = false;
         state.username = undefined;
         storageApi.removeTokens();
      } );
      builder.addCase( logout.rejected, ( state, { payload } ) => {
         state.error = payload;
      } );
   }
} );

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
export const asyncAuthActions = { login, logout };