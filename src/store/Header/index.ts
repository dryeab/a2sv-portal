import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  changeBackground: false,
};

const slice = createSlice({
  name: "header",
  initialState,
  reducers: {
    bgToTransparent: (state) => {
      state.changeBackground = false;
    },
    bgToWhite: (state) => {
      state.changeBackground = true;
    },
  },
});

export const { bgToTransparent, bgToWhite } = slice.actions;
export default slice.reducer;
