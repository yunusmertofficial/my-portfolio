import About from "@/components/About";
import Cta from "@/components/Cta";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider containerClassName="h-20" backgroundColor="#fef9f5" />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
