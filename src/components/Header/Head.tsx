"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Head = ({ children }: { children: React.ReactNode }) => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        header
          ? "py-2 bg-white shadow-lg dark:bg-accent"
          : "py-2 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fef9f5]"}
      `}
    >
      {children}
    </header>
  );
};

export default Head;
