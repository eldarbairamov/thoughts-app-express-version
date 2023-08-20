import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThought } from "../../interface/thought.interface.ts";
import { thoughtApi } from "../../api/thought.api.ts";
import { AxiosApiError } from "../../interface/axios.interface.ts";

export const getAllThoughts = createAsyncThunk<IThought[], void, { rejectValue: string | undefined }>(
    "thought/getAllThoughts",
    async ( _, { rejectWithValue } ) => {
       try {
          const { data } = await thoughtApi.getAll();
          return data;
       }
       catch ( e ) {
          const axiosError = e as AxiosApiError;
          return rejectWithValue( axiosError.response?.data.message );
       }
    }
);

export const writeThought = createAsyncThunk<IThought, { content: string }, { rejectValue: string | undefined }>(
    "thought/writeThought",
    async ( { content }, { rejectWithValue } ) => {
       try {
          const { data } = await thoughtApi.create( content );
          return data;
       }
       catch ( e ) {
          const axiosError = e as AxiosApiError;
          return rejectWithValue( axiosError.response?.data.message );
       }
    }
);

export const deleteThought = createAsyncThunk<void, { thoughtId: number }, { rejectValue: string | undefined }>(
    "thought/deleteThought",
    async ( { thoughtId }, { rejectWithValue } ) => {
       try {
          await thoughtApi.delete( thoughtId );
       }
       catch ( e ) {
          const axiosError = e as AxiosApiError;
          return rejectWithValue( axiosError.response?.data.message );
       }
    }
);