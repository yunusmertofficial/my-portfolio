"use client";
import {
  RiFacebookFill,
  RiLinkedinFill,
  RiGithubFill,
  RiInstallFill,
  RiYoutubeFill,
} from "react-icons/ri";
import Link from "next/link";

const icons = [
  {
    Icon: RiFacebookFill,
    link: "https://www.facebook.com/#",
  },
  {
    Icon: RiLinkedinFill,
    link: "https://www.linkedin.com/in/yunus-emre-mert-4934b2296/",
  },
  {
    Icon: RiGithubFill,
    link: "https://github.com/yunusmertofficial",
  },
  {
    Icon: RiInstallFill,
    link: "https://www.instagram.com/#",
  },
  {
    Icon: RiYoutubeFill,
    link: "https://www.youtube.com/#",
  },
];

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, i) => (
        <Link href={icon.link} key={i}>
          <div className={`${iconStyles}`}>{<icon.Icon size={24} />}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
