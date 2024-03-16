import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneIcon,
  GraduationCap,
  Calendar,
  Briefcase,
  PhoneCall,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Yunus Emre Mert",
  },
  {
    icon: <MailIcon size={20} />,
    text: "yunusmertofficial@gmai.com",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bilgisayar programcılığı öğrencisi",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Istanbul, Turkey",
  },
];

const qualificationsData = [
  {
    title: "eğitim",
    data: [
      {
        university: "Trakya University",
        qualification: "Bilgisayar Programcılığı",
        date: "2024 - (Devam Ediyor)",
      },
    ],
  },
  {
    title: "deneyim",
    data: [
      {
        company: "Medron Technology",
        role: "Full Stack Developer",
        years: "2022 - (Devam Ediyor)",
      },
      {
        company: "Freelance",
        role: "Full Stack Developer",
        years: "2024 - (Devam Ediyor)",
      },
    ],
  },
];

const skillsData = [
  {
    title: "yetenekler",
    data: [
      {
        name: "HTML5 - CSS3",
      },
      {
        name: "javascript - typescript",
      },
      {
        name: "Next.js",
      },
      {
        name: "React.js",
      },
      {
        name: "Node.js",
      },
      {
        name: "Docker",
      },
      {
        name: "SQL - NoSQL",
      },
      {
        name: "MongoDB - Mysql - Redis - Postgresql",
      },
      {
        name: "Algorithma ve Veri Yapıları",
      },
    ],
  },
  {
    title: "araçlar",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (
    arr: {
      title: string;
      data?: any;
    }[],
    title: string
  ) => {
    const item = arr.find((data) => data.title === title);
    return item;
  };

  const experience = getData(qualificationsData, "deneyim");
  const education = getData(qualificationsData, "eğitim");
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title my-8 xl:my-16 text-center mx-auto">
          Hakkımda
        </h2>

        <div className="flex-1">
          <Tabs defaultValue="personal">
            <TabsList className="w-full grid grid-cols-3 xl:border dark:border-none">
              <TabsTrigger value="personal">Kişisel Bilgilerim</TabsTrigger>
              <TabsTrigger value="qualifications">Niteliklerim</TabsTrigger>
              <TabsTrigger value="skills">Becerilerim</TabsTrigger>
            </TabsList>
            <div className="text-lg mt-12 ">
              <TabsContent value="personal">
                <div className="text-center xl:text-left">
                  <h3 className="h3 mb-4">Eşsiz Hizmet Kalitesi</h3>
                  <p className="subtitle">
                    web siteleri oluşturma konusunda uzmanım, dinamik ve
                    etkileyici kullanıcı deneyimleri sunarım.
                  </p>
                  <div className="grid xl:grid-cols-2 gap-8 mt-12">
                    {infoData.map((data, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-x-4 mx-auto"
                      >
                        <div className="text-primary">{data.icon}</div>
                        <p className="ml-4">{data.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 mt-10">
                    <h3 className="text-primary">Diller</h3>
                    <div className="border-b border-border" />
                    <p className="subtitle">
                      Türkçe (Ana dil), İngilizce (Orta seviye)
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="qualifications">
                <div>
                  <h3 className="h3 mb-8 text-center xl:text-left">
                    Eğitim ve Deneyim
                  </h3>
                  <div className="grid xl:grid-cols-2 gap-y-8">
                    <div className="flex flex-col gap-y-8">
                      <div className="flex items-center gap-x-4 text-[22px] text-primary">
                        <Briefcase />
                        <h4 className="capitalize font-medium">
                          {experience?.title}
                        </h4>
                      </div>

                      <div className="flex flex-col gap-y-8">
                        {experience?.data?.map((item: any, index: number) => {
                          const { company, role, years } = item;
                          return (
                            <div key={index} className="flex gap-8 group ">
                              <div className="h-[84px] w-[1px] bg-border relative mb-2">
                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500" />
                              </div>
                              <div>
                                <div className="font-semibold text-xl leading-none mb-2 ">
                                  {company}
                                </div>
                                <div className="text-lg leading-none text-muted-foreground mb-4">
                                  {role}
                                </div>
                                <div className="text-base font-medium">
                                  {years}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-8">
                      <div className="flex items-center gap-x-4 text-[22px] text-primary">
                        <GraduationCap />
                        <h4 className="capitalize font-medium">
                          {education?.title}
                        </h4>
                      </div>
                      <div className="flex flex-col gap-y-8">
                        {education?.data?.map((item: any, index: number) => {
                          const { university, qualification, date } = item;
                          return (
                            <div key={index} className="flex gap-8 group">
                              <div className="h-[84px] w-[1px] bg-border relative mb-2">
                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500" />
                              </div>
                              <div>
                                <div className="font-semibold text-xl leading-none mb-2 ">
                                  {university}
                                </div>
                                <div className="text-lg leading-none text-muted-foreground mb-4">
                                  {qualification}
                                </div>
                                <div className="text-base font-medium">
                                  {date}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                {/* yan yana 3 tane gelsin */}
                <div className="grid xl:grid-cols-2 gap-8">
                  {skillsData.map((data, index) => {
                    const { title } = data;
                    return (
                      <div key={index} className="flex flex-col gap-8">
                        <h3 className="text-primary text-[22px] font-medium">
                          {data.title}
                        </h3>
                        <div className="border-b border-border" />
                        {title === "yetenekler" && (
                          <div className="grid grid-cols-3 gap-8">
                            {data.data.map((item: any, index: number) => (
                              <div
                                key={index}
                                className="flex items-center gap-4"
                              >
                                <p>{item.name}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        {title === "araçlar" && (
                          <div className="grid grid-cols-4 gap-8">
                            {data.data.map((item: any, index: number) => (
                              <div
                                key={index}
                                className="flex items-center gap-4"
                              >
                                <div className="text-primary">
                                  <Image
                                    src={item.imgPath}
                                    width={50}
                                    height={50}
                                    alt="vscode"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
