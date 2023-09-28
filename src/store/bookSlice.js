// booksSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = action.payload;
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
