import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, reStocked } from "./cakeSlice";

const CakeView = () => {
  let noOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>no of Cakes - {noOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(reStocked(5))}>Restock cakes</button>
    </div>
  );
};

export default CakeView;
