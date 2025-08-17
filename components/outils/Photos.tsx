"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Photos = () => {
  return (
    <div className=" w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            ease: "easeIn",
            delay: 2,
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              ease: "easeInOut",
              delay: 2.4,
            },
          }}
          className="w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] rounded-full overflow-hidden absolute"
        >
          <Image
            src="/assets/cv.png"
            fill
            alt="logo"
            priority
            quality={100}
            className="object-cover w-full h-full"
            sizes="(max-width: 1024px) 298px, 498px"
          />
        </motion.div>
        <motion.svg
          className={"w-[300px] lg:w-[506px] h-[300px] lg:h-[506px] "}
          fill="transparent"
          viewBox={"0 0 506 506"}
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <motion.circle
            cx={"253"}
            cy={"253"}
            r={"250"}
            stroke={"#0ce0cb"}
            strokeWidth={"4"}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 20 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photos;
