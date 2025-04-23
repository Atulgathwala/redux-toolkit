import { configureStore } from "@reduxjs/toolkit";

// ? import ythe cake reducer
import cakeReducer from "../features/cake/cakeSlice";

// ? This configureStore method will accept one object as an argument

import iceCreamReducer from "../features/iceCream/iceCreamSlice";

import userReducer from "../features/user/userSlice";
// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
