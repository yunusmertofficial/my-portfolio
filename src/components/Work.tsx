"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { Button } from "./ui/button";

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description: "A website for a fictional company",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Lumina Website",
    description: "A website for a fictional company",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Ignite Website",
    description: "A website for a fictional company",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Serenity Website",
    description: "A website for a fictional company",
    link: "/",
    github: "/",
  },
];

export default function Work() {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto flex flex-col items-center xl:flex-row xl:justify-between">
        <div
          className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left
          mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start
        "
        >
          <h2 className="section-title mb-4">Son Projelerim</h2>
          <p className="subtitle mb-8">
            {`İşte üzerinde çalıştığım projelerden bazıları. Görüntüleyebilirsiniz
            Github'daki kaynak kodunu kullanın veya canlı web sitesini ziyaret
            edin.`}
          </p>
          <Link href="/projects">
            <Button>Tüm projeler</Button>
          </Link>
        </div>
        <div className="max-w-full xl:max-w-[60%] xl:absolute xl:top-0 xl:right-2">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0.4).map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
