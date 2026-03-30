import React from "react";

interface PageBannerProps {
  image: string;
  title: string;
  subtitle?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ image, title, subtitle }) => {
  return (
    <div className="w-full px-4 md:px-10 py-6">
      <div className="relative w-full h-[220px] md:h-[250px] rounded-2xl overflow-hidden">
        {/* Background image */}
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none scale-105"
          style={{ filter: "blur(2px)" }}
        />
        {/* White fade from bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/50 to-white" />

        {/* Content — centered */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center gap-2 px-6 text-center">
          <h1 className="text-[30px] md:text-[42px] font-bold text-[#111111] leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[13px] md:text-[15px] text-[#444444]">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
