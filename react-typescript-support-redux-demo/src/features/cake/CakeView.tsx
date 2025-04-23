// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, reStocked } from "./cakeSlice";

const CakeView = () => {
  let noOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>no of Cakes - {noOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(reStocked(10))}>Restock cakes</button>
    </div>
  );
};

export default CakeView;
