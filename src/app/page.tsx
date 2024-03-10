import About from "@/components/About";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider containerClassName="h-20" backgroundColor="#fef9f5" />
      <About />
    </main>
  );
}
