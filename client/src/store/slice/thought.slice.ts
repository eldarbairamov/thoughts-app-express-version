import { createSlice } from "@reduxjs/toolkit";
import { deleteThought, getAllThoughts, writeThought } from "../thunk/thought.thunk.ts";
import { IThought } from "../../interface/thought.interface.ts";

interface IInitialState {
   thoughts: IThought[];
   error: string | undefined;
}

const initialState: IInitialState = {
   thoughts: [] as IThought[],
   error: undefined
};

const thoughtSlice = createSlice( {
   name: "thought",
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder.addCase( writeThought.fulfilled, ( state, { payload } ) => {
         state.thoughts.push( payload );
      } );
      builder.addCase( writeThought.rejected, ( state, { payload } ) => {
         state.error = payload;
      } );

      builder.addCase( getAllThoughts.fulfilled, ( state, { payload } ) => {
         state.thoughts = payload;
      } );
      builder.addCase( getAllThoughts.rejected, ( state, { payload } ) => {
         state.error = payload;
      } );

      builder.addCase( deleteThought.fulfilled, ( state, { meta: { arg } } ) => {
         state.thoughts = state.thoughts.filter( t => t.id !== arg.thoughtId );
      } );
      builder.addCase( deleteThought.rejected, ( state, { payload } ) => {
         state.error = payload;
      } );
   }
} );

export const thoughtReducer = thoughtSlice.reducer;
export const thoughtActions = thoughtSlice.actions;
export const asyncThoughtActions = { writeThought, getAllThoughts, deleteThought };
