import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

type UserType = {
  id: number,
  name:string
}
type initialStateType = {
  loading: boolean,
  users: UserType[],
  error:string
  
}
let initialUserState:initialStateType = {
  loading: false,
  users: [],
  error: "",
};

// Genrating pending , fullfilled  and rejected action types  by AsycnThunks it automatically Handles

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data; // or return response.data to get full user details
});
const userSlice = createSlice({
  name: "user",
  reducers:{},
  initialState: initialUserState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action:PayloadAction<UserType[]>) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "something Went Wrong";
    });
  },
});

export default userSlice.reducer;
