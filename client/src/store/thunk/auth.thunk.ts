import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILogin, ITokenPair } from "../../interface/auth.interface.ts";
import { authApi } from "../../api/auth.api.ts";
import { AxiosApiError } from "../../interface/axios.interface.ts";

export const login = createAsyncThunk<ITokenPair, { body: ILogin }, { rejectValue: string | undefined }>(
    "auth/login",
    async ( { body }, { rejectWithValue } ) => {
       try {
          const { data } = await authApi.login( body );
          return data;
       }
       catch ( e ) {
          const axiosError = e as AxiosApiError;
          return rejectWithValue( axiosError.response?.data.message );
       }
    }
);

export const logout = createAsyncThunk<void, void, { rejectValue: string | undefined }>(
    "auth/logout",
    async ( _, { rejectWithValue } ) => {
       try {
          await authApi.logout();
       }
       catch ( e ) {
          const axiosError = e as AxiosApiError;
          return rejectWithValue( axiosError.response?.data.message );
       }
    }
);