import React from "react";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <div className="contain">
      <h1>Tabs in react js</h1>
      <div className="w-full xl:w-[1060px] flex justify-center  flex-col">
        <Tabs />
      </div>
    </div>
  );
};

export default App;
