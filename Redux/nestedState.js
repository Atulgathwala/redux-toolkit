let redux = require("redux");
let produce = require('immer').produce;

const initialState = {
  name: "atul",
  address: {
    street: "123 main st",
    city: "boston",
    state: "ma",
  },
};

const STREET_UPDATE = "STREET_UPDATE";

const UpdateStreet = (street) => {
  return {
    type: STREET_UPDATE,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
    //   return {
    //     ...state,
    //     address: {
    //       ...state.address,
    //       street: action.payload,
    //     },
      //   };
      //? no need to write this complex state
          
          return produce(state, (draft) => {
              draft.address.street=action.payload
          })

    default:
      return state;
  }
};

const store = redux.createStore(reducer);
console.log("initial state ", store.getState());
const unSubscribe = store.subscribe(() => {
    console.log("Updated state ", store.getState());
    
});

store.dispatch(UpdateStreet("sugar mill "))

unSubscribe();
