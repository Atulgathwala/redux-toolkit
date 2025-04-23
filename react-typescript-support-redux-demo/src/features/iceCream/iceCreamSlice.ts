import { createSlice ,PayloadAction } from "@reduxjs/toolkit";


type initialStateType = {
  iceCreams: number;
}
let initialState:initialStateType = {
  iceCreams: 20,
};

let iceCreamSlice = createSlice({
  name: "iceCream",
  initialState: initialState,
  reducers: {
    iceCreameOrdered: (state) => {
      state.iceCreams--;
    },
    iceCreameRestocked: (state, action:PayloadAction<number>) => {
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
