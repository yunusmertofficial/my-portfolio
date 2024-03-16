import { GanttChartSquare, Blocks, Gem } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Tasarımı",
    description: "Web siteniz için modern ve kullanıcı dostu tasarımlar.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Geliştirme",
    description: "Front-end ve back-end geliştirme hizmetleri.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Uygulama Geliştirme",
    description: "Mobil ve web uygulamaları için geliştirme hizmetleri.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          Hizmetlerimiz
        </h2>
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
