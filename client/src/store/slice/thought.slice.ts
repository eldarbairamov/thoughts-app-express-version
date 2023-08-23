import { createSlice } from "@reduxjs/toolkit";
import { deleteThought, getAllThoughts, writeThought } from "../thunk/thought.thunk.ts";
import { IThought } from "../../interface/thought.interface.ts";

interface IInitialState {
   thoughts: IThought[];
   error: string | undefined;
   count: number;
   limit: number;
}

const initialState: IInitialState = {
   thoughts: [] as IThought[],
   error: undefined,
   count: 0,
   limit: 10
};

const thoughtSlice = createSlice( {
   name: "thought",
   initialState,
   reducers: {
      limitIncrease: ( state ) => {
         if ( state.limit < state.count ) {
            state.limit *= 2;
         }
      }
   },
   extraReducers: builder => {
      builder.addCase( writeThought.fulfilled, ( state, { payload } ) => {
         state.thoughts.push( payload );
      } );
      builder.addCase( writeThought.rejected, ( state, { payload } ) => {
         state.error = payload;
      } );

      builder.addCase( getAllThoughts.fulfilled, ( state, { payload } ) => {
         state.thoughts = payload.data;
         state.count = payload.count;
      } );
      builder.addCase( getAllThoughts.rejected, ( state, { payload } ) => {
         state.error = payload;
      } );

      builder.addCase( deleteThought.fulfilled, ( state, { payload } ) => {
         state.thoughts = payload.data;
         state.count = payload.count;
      } );
      builder.addCase( deleteThought.rejected, ( state, { payload } ) => {
         state.error = payload;
      } );
   }
} );

export const thoughtReducer = thoughtSlice.reducer;
export const thoughtActions = thoughtSlice.actions;
export const asyncThoughtActions = { writeThought, getAllThoughts, deleteThought };
