import About from "@/components/About";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider containerClassName="h-20" backgroundColor="#fef9f5" />
      <About />
      <Services />
    </main>
  );
}
