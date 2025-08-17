import React from "react";
import { motion, animate } from "framer-motion";

const animationChange = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reserveIndex = (index: number) => {
  const totalEtape = 10;
  return totalEtape - index - 1;
};

const Marches = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={animationChange}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: reserveIndex(index) * 0.1,
            }}
            className="h-full w-full bg-primary relative"
          />
        );
      })}
    </>
  );
};

export default Marches;
