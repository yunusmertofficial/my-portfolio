import React from "react";
import { Button } from "../ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import DevImg from "./DevImg";
import Link from "next/link";
import Socials from "../Socials";
import Badge from "../Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:pb-24 xl:pt-28 bg-[#fef9f5] dark:bg-transparent relative">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Geliştiricisi
            </div>
            <h1 className="h1 mb-4">Merhaba, benim adım Yunus Emre</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0 ">
              {`Bilgisayar programcılığı alanında eğitim alıyor ve yazılım sektöründe çalışıyorum. Bu sayede modern
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
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>

          <div className="hidden bg-hero_shape2_light dark:bg-hero_shape2_dark bg-no-repeat bg-center w-[500px] h-[500px] xl:block relative">
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              endCountNum={2}
              badgeText="Deneyim Yılı"
              icon={<RiBriefcase4Fill size={30} />}
            />
            <Badge
              containerStyles="absolute top-[80%] left-[1rem]"
              endCountNum={10}
              endCountText="+"
              badgeText="Bitilmiş Projeler"
              icon={<RiTodoFill size={30} />}
            />
            <Badge
              containerStyles="absolute top-[50%] -right-[3rem]"
              endCountNum={100}
              endCountText="%"
              badgeText="Mutlu Müşteri"
              icon={<RiTodoFill size={30} />}
            />
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat bg-center relative bg-bottom relative"
              imgSrc="/hero/dev.png"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex absolute left-2/4 bottom-0 animate-bounce z-20">
        <RiArrowDownSLine className="text-3xl text-primary" />
      </div>
    </section>
  );
};

export default Hero;
