"use client";
import React from "react";
import ProfieImage from "@/public/profile.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center flex flex-col items-center justify-center">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src={ProfieImage}
            alt="Picture of the author"
            quality="95"
            priority
            className="h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl"
          />
        </motion.div>
        <motion.span
          className="absolute bottom-0 right-0 text-4xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
        >
          👋
        </motion.span>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Merhaba, Ben Yunus Emre.</span>
        <br />
        <span className="font-bold">1,5</span> senedir{" "}
        <span className="font-bold">full-stack web geliştiricisiyim</span>.
        <span className="italic">web siteleri ve uygulamalar</span>{" "}
        geliştiriyorum. Asıl odak noktam
        <br />
        <span className="underline">React (Next.js)</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          iletişime geç{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <Link
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          CV İndir{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>

        <Link
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/yunus-emre-mert-4934b2296/"
          target="_blank"
        >
          <BsLinkedin />
        </Link>

        <Link
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/yunusmertofficial"
          target="_blank"
        >
          <FaGithubSquare />
        </Link>
      </motion.div>
    </section>
  );
}
