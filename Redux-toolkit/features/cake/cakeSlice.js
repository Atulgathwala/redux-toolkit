const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    reStocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});
// ? Here in this case no need to specify the action no need to say about type automayically whatever the name will be there for that function it will take that only

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
