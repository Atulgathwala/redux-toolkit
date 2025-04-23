import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/iceCream/IceCreamView";
import UserView from "./features/user/UserView";

function App() {


  return (
    <>
      <CakeView />
      <hr />
      <IceCreamView />
      <hr />
      <UserView />
    </>
  );
}

export default App;
