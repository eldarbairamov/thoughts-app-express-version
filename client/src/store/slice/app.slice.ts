import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { storageApi } from "../../api/storage.api.ts";

interface IInitialState {
   error: string | undefined,
   theme: string
}

const initialState: IInitialState = {
   error: undefined,
   theme: storageApi.getTheme() || 'light'
}

export const appSlice = createSlice({
   name: 'app',
   initialState,
   reducers: {
      setError: (state, { payload }: PayloadAction<string>) => {
         state.error = payload
      },
      setTheme: (state, { payload }: PayloadAction<string>) => {
         state.theme = payload
         storageApi.setTheme(payload)
      }
   }
})

export const appReducer = appSlice.reducer
export const appActions = appSlice.actions