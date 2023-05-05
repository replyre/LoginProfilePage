import { createSlice } from "@reduxjs/toolkit";

const initialValue = "";
export const bgColorSlice = createSlice({
  name: "bgColor",
  initialState: { value: initialValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = bgColorSlice.actions;
export default bgColorSlice.reducer;
