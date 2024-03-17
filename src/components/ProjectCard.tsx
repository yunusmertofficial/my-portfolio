import React from "react";
import Link from "next/link";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";
import Image from "next/image";
interface Project {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader>
        <div
          className="relative w-full h-[300px] flex items-center justify-center bg-tertiary 
        dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] dark:bg-work_project_bg_dark
        xl:bg-no-repeat bg-cover bg-center rounded-t-lg overflow-hidden
        "
        >
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={247}
            height={250}
            alt={project.name}
            priority
          />
          <div className="flex gap-x-4">
            <Link
              href={project.link}
              className="bg-secondary w-[54px] h-[54px] rounded-full
                flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100
                transition-all duration-200
                "
            >
              <Link2Icon className="text-white" size={32} />
            </Link>
            <Link
              href={project.github}
              className="bg-secondary w-[54px] h-[54px] rounded-full
                flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100
                transition-all duration-200
                "
            >
              <Github className="text-white" size={32} />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <div className="h4 mb-1">{project.name}</div>
        <div className="text-muted-foreground text-lg">
          {project.description}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
