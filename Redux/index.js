// console.log("index file for redux");

const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

// ? let import helper function That is bindAction Function

const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTORED = "CAKE_RESTORED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTORED = "ICECREAM_RESTORED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restoreCake(qty = 1) {
  return {
    type: CAKE_RESTORED,
    payload: qty,
  };
}

function orderIcecream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restoreIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTORED,
    payload: qty,
  };
}
// ? initial state

// let initialState = {
//   numOfCakes: 10,
//   numOfIceCream: 30,
// };
//? Lets define the reducer

// ? lets create different states for both

let initialCAKEState = {
  numOfCakes: 10,
};

let initialICECREAMstate = {
  numOfIceCream: 30,
};

const cakeReducer = (state = initialCAKEState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTORED:
      return { ...state, numOfCakes: state.numOfCakes + action.payload };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialICECREAMstate, action) => {
  switch (action.type) {
    case ICECREAM_RESTORED:
      return { ...state, numOfIceCream: state.numOfIceCream + action.payload };

    default:
      return state;
  }
};

const rootReducer = combineReducer({
  icecream: iceCreamReducer,
  cake: cakeReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial State ", store.getState()); // printing the state of the redux
const unSubscribe = store.subscribe(() => {});
// console.log("updated state  ", store.getState())
// ? if you have this logger then no need to use this console log statement just remove this logger will automaticaly do

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restoreCake());
// store.dispatch(restoreCake(7));

// ? lets see how can we combine multiple reducer
const actions = bindActionCreators(
  { orderCake, restoreCake, orderIcecream, restoreIceCream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restoreCake();
actions.restoreCake(50);
actions.orderIcecream();
actions.orderIcecream();
actions.orderIcecream();
actions.restoreIceCream(50);

unSubscribe();
