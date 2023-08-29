import React, { useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChilden: 0.5 } },
};

const Slider = () => {
  return (
    <div className="flex-1">
      <motion.input
        variants={container}
        type="range"
        min="1"
        max="100"
        style={{ cursor: "pointer" }}
        className="w-40 bg-slate-400"
        initial="hidden"
        animate="show"
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default Slider;
