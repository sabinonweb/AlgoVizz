import bubbleSort from "../utils/algorithm";
import { useState } from "react";
import { motion } from "framer-motion";

const BubbleSortVisualizer = () => {
  const [array, setArray] = useState<number[]>([]);
  const [sorted, setSorted] = useState(false);

  let randomArray: number[] = [];
  for (let i = 0; i < 20; i++) {
    randomArray = Array.from({ length: 20 }, () => Math.random() * 100);
  }

  const handleBubbleSortClick = async () => {
    const sortedArray: number[] = await bubbleSort(randomArray);

    setArray(sortedArray);
    setSorted(true);
    console.log(sortedArray);
  };

  const handleBubbleUnsortClick = async () => {
    setArray(randomArray);
    setSorted(false);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.5, staggerDirection: -1 },
    },
  };

  const items = {
    hidden: { backgroundColor: "red" },
    show: {
      backgroundColor: "blue",
    },
  };

  return (
    <>
      {sorted ? (
        <div className="flex self-center text-xl font-bold">
          Bubble Sort Visualizer
        </div>
      ) : null}

      <motion.div
        className="flex-1 flex items-end"
        variants={container}
        initial="hidden"
        animate={sorted ? "show" : "hidden"}
        transition={{ duration: 0.3 }}
      >
        {sorted &&
          array.map((value, index) => (
            <motion.div
              variants={items}
              initial="hidden"
              animate="show"
              key={index}
              className={`m-1`}
              style={{ height: value * 5, width: value * 1.1 }}
            ></motion.div>
          ))}

        {!sorted &&
          randomArray.map((value, index) => (
            <div
              key={index}
              className={`bg-red-900 m-1`}
              style={{ height: value * 5, width: value * 1.1 }}
            ></div>
          ))}
      </motion.div>

      {!sorted ? (
        
        <div className="flex items-center justify-center">
          <button onClick={handleBubbleSortClick} className="border-2 p-1">
            Sort
          </button>
        </div>
      ) : null}

      {sorted ? (
        <div className="flex justify-center items-center">
          <button onClick={handleBubbleUnsortClick} className="border-2 p-1">
            Unsort
          </button>
        </div>
      ) : null}
    </>
  );
};

export default BubbleSortVisualizer;
