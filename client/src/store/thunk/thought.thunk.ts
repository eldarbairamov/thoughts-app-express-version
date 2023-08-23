import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThought, IThoughts } from "../../interface/thought.interface.ts";
import { thoughtApi } from "../../api/thought.api.ts";
import { AxiosApiError } from "../../interface/axios.interface.ts";

export const getAllThoughts = createAsyncThunk<IThoughts, { limit: number }, { rejectValue: string | undefined }>(
    "thought/getAllThoughts",
    async ( {limit}, { rejectWithValue } ) => {
       try {
          const { data } = await thoughtApi.getAll(limit);
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

export const deleteThought = createAsyncThunk<IThoughts, { thoughtId: number, limit: number }, { rejectValue: string | undefined }>(
    "thought/deleteThought",
    async ( { thoughtId, limit }, { rejectWithValue } ) => {
       try {
          const { data } = await thoughtApi.delete( thoughtId, limit );
          return data
       }
       catch ( e ) {
          const axiosError = e as AxiosApiError;
          return rejectWithValue( axiosError.response?.data.message );
       }
    }
);