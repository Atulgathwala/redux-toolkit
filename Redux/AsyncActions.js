const redux = require("redux");
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleWare =
  require("redux-thunk").default || require("redux-thunk");

const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUserrequest = () => ({ type: FETCH_USERS_REQUESTED });
const fetchUserSuccess = (users) => ({
  type: FETCH_USERS_SUCCEEDED,
  payload: users,
});
const fetchUserFailed = (error) => ({
  type: FETCH_USERS_FAILED,
  payload: error,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCEEDED:
      return { loading: false, users: action.payload, error: "" };
    case FETCH_USERS_FAILED:
      return { loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};

const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchUserrequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailed(error.message));
      });
  };
};

console.log(typeof thunkMiddleWare);

// const store = redux.createStore(reducer, applyMiddleware(thunkMiddleWare));

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(fetchUser());
