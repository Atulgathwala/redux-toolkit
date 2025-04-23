const createSlice = require("@reduxjs/toolkit").createSlice;

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



module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions
