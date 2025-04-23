import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { iceCreameOrdered, iceCreameRestocked } from "./iceCreamSlice";

const IceCreamView = () => {
  let dispatch = useDispatch();
  let numOfIceCream = useSelector((state) => state.iceCream.iceCreams);
  return (
    <div>
      <h2>no of IceCream - {numOfIceCream} </h2>
      <button onClick={() => dispatch(iceCreameOrdered())}>Order Icecream</button>
      <button onClick={() => dispatch(iceCreameRestocked(10))}>
        Restock IceCream
      </button>
    </div>
  );
};

export default IceCreamView;
