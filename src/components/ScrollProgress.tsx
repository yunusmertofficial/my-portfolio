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

const ScrollProgress = ({ children }: ScrollProgressProps) => {
  const completion = useScrollProgress();
  //completion 30 diyelim yani 30% scroll edildiğini gösterir
  //completion - 100 diyerek 30-100 = -70 yani -70% translate yaptık
  //top ve bottom 0 diyerek de üstteen şuanki scroll yüzdesi kadar aşağıda olmasını sağladık
  //position fixed diyerek de divimizi tarayıcı ekranında sabitledik
  //right 0 diyerek de sağa sabitledik
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>
      <div className="h-[4000px]"></div>
    </>
  );
};

export default ScrollProgress;
