"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { TabsContent } from "@radix-ui/react-tabs";

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
] as const;

const uniqueCategories = [
  "tüm projeler",
  ...Array.from(new Set(projectData.map((project) => project.category))),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("tüm projeler");
  const filteredProjects = projectData.filter(
    (project) => project.category === category || category === "tüm projeler"
  );
  return (
    <section className="min-h-screen pt-12 mb-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Projelerim
        </h2>
        <Tabs defaultValue={category}>
          <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((item, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(item)}
                  value={item}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {item}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard key={index} project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
