import React from "react";
import Top from "./components/Top";
import BubbleSortVisualizer from "./components/BubbleSortVisualizer";
import Slider from "./utils/Slider";

const App = () => {
  return (
    <div className="flex-1">
      <Slider />
      <BubbleSortVisualizer />
    </div>
  );
};

export default App;
