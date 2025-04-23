import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  iceCreams: 20,
};

let iceCreamSlice = createSlice({
  name: "iceCream",
  initialState: initialState,
  reducers: {
    iceCreameOrdered: (state) => {
      state.iceCreams--;
    },
    iceCreameRestocked: (state, action) => {
      state.iceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("cake/ordered", (state) => {
      state.iceCreams--;
    });
  },
}); 



export default iceCreamSlice.reducer
export const { iceCreameOrdered, iceCreameRestocked } = iceCreamSlice.actions;
