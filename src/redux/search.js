import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Searchvalue: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    
    SearchInput: (state, action) => {
      state.Searchvalue = action.payload;
    }
  },
});

export const { SearchInput } =
  searchSlice.actions;

export default searchSlice.reducer;
