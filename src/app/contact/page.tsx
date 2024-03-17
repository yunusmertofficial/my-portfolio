import Form from "@/components/Form";
import { HomeIcon, MailIcon } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Merhaba de👋
            </div>
            <h1 className="h1 max-w-md mb-8">{`Hadi beraber çalışalım.`}</h1>
            <p className="subtitle max-w-[480px]">
              {`Eğer bir projeniz varsa, bir fikriniz varsa, bir sorunuz varsa, ya da sadece merhaba demek istiyorsanız, aşağıdaki formu doldurarak bana ulaşabilirsiniz.`}
            </p>
          </div>
          <div className="hidden xl:flex w-full bg-contain bg-illustration_light bg-top dark:bg-illustration_dark bg-no-repeat"></div>
        </div>
        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-14  mb-12 xl:mb-24">
            <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
              <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
                <div className="flex items-center gap-x-8">
                  <MailIcon size={18} className="text-primary" />
                  <div>yunusmertofficial@gmail.com</div>
                </div>
                <div className="flex items-center gap-x-8">
                  <HomeIcon size={18} className="text-primary" />
                  <div>Turkey, Istanbul</div>
                </div>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
