"use client";
import React from "react";
import { motion } from "framer-motion";
import useScrollProgress from "@/hooks/useScrollProgress";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface ScrollProgressProps {
  children: React.ReactNode;
}

const Template = ({ children }: ScrollProgressProps) => {
  const completion = useScrollProgress();

  // completion değerimiz 30 diyelim yani 30% scroll edildiğini gösterir.
  // completion - 100 yaparak -70% translateY değeri elde ederiz
  // yani 70% yukarıda olduğumuzu gösterir.

  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        <div>{children}</div>
      </motion.main>
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 h-full transition-all duration-700"
      ></span>
      <div className="h-[4000px]"></div>
    </>
  );
};

export default Template;
