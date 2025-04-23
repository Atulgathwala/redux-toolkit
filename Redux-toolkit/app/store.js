const configureStore = require("@reduxjs/toolkit").configureStore;

// ? import ythe cake reducer

const cakeReducer = require("../features/cake/cakeSlice");

// ? This configureStore method will accept one object as an argument

const iceCreamReducer = require("../features/iceCream/iceCreamSlice");
const userReducer = require("../features/user/userSlice")
const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user:userReducer

  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
