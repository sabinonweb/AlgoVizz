import bubbleSort from "../utils/algorithm";
import { useState } from "react";
import { motion } from "framer-motion";

const BubbleSortVisualizer = () => {
  const [array, setArray] = useState<number[]>([]);
  const [sorted, setSorted] = useState<boolean>(false);
  const [isSorting, setIsSorting] = useState<boolean>(false);

  let randomArray: number[] = [];
  let storeArray: number[] = [];
  for (let i = 0; i < 20; i++) {
    randomArray = Array.from({ length: 20 }, () => Math.random() * 100);
    console.log(randomArray);
  }

  storeArray = randomArray;

  const handleSorted = () => {
    const sortedArray = bubbleSort(randomArray);

    for (let i = 0; i < sortedArray.length; i++) {
      setTimeout(() => {
        setArray([...sortedArray.slice(0, i + 1), ...array.slice(i + 1)]);
      }, i * 500);
    }

    setArray(sortedArray);
    setSorted(true);
    setIsSorting(true);
  };

  const handleReset = () => {
    setArray(storeArray);
    setSorted(false);
    setIsSorting(false);
  };

  const handleNew = () => {
    setArray(randomArray);
  };

  return (
    <div>
      {!sorted && (
        <>
          <button
            className="h-10 w-14 bg-green-500 rounded-xl"
            onClick={handleNew}
          >
            New
          </button>
          <button
            className="h-10 w-14 bg-green-500 rounded-xl m-3"
            onClick={handleSorted}
          >
            Sort
          </button>
          <div className="flex flex-row">
            {randomArray.map((value, index) => (
              <div
                key={index}
                className={`bg-red-900 m-1`}
                style={{ height: value * 5, width: value * 1.1 }}
              ></div>
            ))}
          </div>
        </>
      )}

      {sorted && (
        <>
          <button
            className="h-10 w-14 bg-green-500 rounded-xl m-3"
            onClick={handleReset}
          >
            Reset
          </button>
          <div className="flex flex-row">
            {array.map((value, index) => (
              <div
                key={index}
                className={`bg-blue-900 m-1`}
                style={{ height: value * 5, width: value * 1.1 }}
              ></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BubbleSortVisualizer;
