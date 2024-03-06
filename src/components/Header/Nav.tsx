"use client";
import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { motion } from "framer-motion";

interface NavProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyles: string;
}

const links = [
  { name: "anasayfa", path: "/" },
  { name: "projelerim", path: "/projects" },
  { name: "iletişim", path: "/contact" },
] as const;

export default function Nav({
  containerStyles,
  linkStyles,
  underlineStyles,
}: NavProps) {
  const segment = useSelectedLayoutSegment();
  return (
    <nav className={containerStyles}>
      {links.map((link) => {
        const active = `/${segment || ""}` === link.path;
        return (
          <Link
            key={link.name}
            href={link.path}
            className={`capitalize ${linkStyles}`}
          >
            {active && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{
                  type: "tween",
                }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
