import React from "react";
import { Button } from "../ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import DevImg from "../DevImg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-12 xl:pb-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Geliştiricisi
            </div>
            <h1 className="h1 mb-4">Merhaba, benim adım Yunus Emre</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0 ">
              {`Bilgisayar programcılığı alanında eğitim alıyor ve yazılım sektöründe çalışıyorum. Bu sayede, Docker'dan GraphQL'e kadar modern
              teknolojilerde deneyim kazandım. Aynı zamanda, HTML, CSS,
              React.js, JavaScript, Node.js ve Next.js gibi önemli front-end ve
              back-end teknolojilerinde yetkinim.`}
            </p>
            <div className="flex flex-col gap-3 md:flex-row mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  İletişime Geç <Send size={18} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" className="gap-x-2">
                  CV İndir
                  <Download size={18} />
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden xl:flex relative">Image</div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
