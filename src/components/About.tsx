"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Hakkımda</SectionHeading>
      <p className="mb-3">
        Yazılım dünyasına olan ilgim ve tutkum, lise eğitimim sırasında kendini
        göstermeye başladı. Geleneksel eğitim sistemi yerine, daha hızlı
        ilerleyebileceğim ve ilgi duyduğum alana odaklanabileceğim bir ortam
        arayışına girdim. Bu nedenle, açık liseye geçerek, kendi tempomda
        ilerleyebileceğim bir eğitim imkanı buldum. Bu sırada bir yazılım
        şirketi olan <span className="font-medium">Medron Teknolojide</span>{" "}
        <span className="font-medium">full-stack web geliştiricisi</span> olarak
        çalışmaya başladım. Lise eğitimimi tamamladıktan sonra,{" "}
        <span className="font-medium">Bilgisayar Programcılığı</span> bölümünü
        kazandım. Şu anda, hem bilgisayar programcılığı bölümünde öğrenimime
        devam ediyorum hem de Medron Teknolojide çalışmaya devam ediyorum.
      </p>
      <p>
        <span className="italic">Kod yazmadığım zaman</span>,{" "}
        <span className="font-medium">kitap okumayı</span>,{" "}
        <span className="font-medium">yürüyüş yapmayı</span>,{" "}
        <span className="font-medium">yeni şeyler öğrenmeyi</span>,{" "}
        <span className="font-medium">yeni yerler görmeyi</span> ve{" "}
        <span className="font-medium">yeni insanlar tanımayı</span> seviyorum.
        Ayrıca hobilerim arasında{" "}
        <span className="font-medium">masa tenisi</span> oynamak da var ancak
        oynayacak imkan bulamıyorum.
      </p>
    </motion.section>
  );
}
