import { createSlice , PayloadAction } from "@reduxjs/toolkit";


type initialStateType= {
  numOfCakes:number
}
const initialState: initialStateType = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    reStocked: (state, action:PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
  },
});
// ? Here in this case no need to specify the action no need to say about type automayically whatever the name will be there for that function it will take that only

export default  cakeSlice.reducer
export const {ordered , reStocked} = cakeSlice.actions;
