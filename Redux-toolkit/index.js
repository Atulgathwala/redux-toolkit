const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const { fetchUsers } = require("./features/user/userSlice");

const iceCreamActions =
  require("./features/iceCream/iceCreamSlice").iceCreamActions;

console.log("initial State ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated State ", store.getState());
  //? remove this statement from this
});

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.reStocked(5));
// store.dispatch(iceCreamActions.iceCreameOrdered());
// store.dispatch(iceCreamActions.iceCreameOrdered());
// store.dispatch(iceCreamActions.iceCreameRestocked(30));
store.dispatch(fetchUsers());

// unsubscribe();//? if we try to use Async we need to comment this unsubscribe 

