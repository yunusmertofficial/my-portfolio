"use client";
import React from "react";
import CountUp from "react-countup";

// Props için bir tip tanımı oluşturuyoruz
interface BadgeProps {
  containerStyles?: string; // bu string tipinde olabilir veya daha spesifik bir tip tanımı yapılabilir
  icon?: React.ReactNode; // JSX element veya component olabilir
  endCountNum?: number; // sayısal bir değer
  endCountText?: string; // string tipinde bir metin
  badgeText?: string; // string tipinde bir metin
}

// Tip tanımını props olarak kullanıyoruz
const Badge: React.FC<BadgeProps> = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  // className içerisindeki ifadeyi template literals olarak düzenliyoruz
  return (
    <div className={`badge ${containerStyles || ""}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-2xl leading-none font-bold text-primary">
          <CountUp end={endCountNum || 0} delay={1} duration={4} />
          <span>{endCountText}</span>
        </div>
        <div className="max-w-[70px] leading-none text-sm font-medium text-black">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
