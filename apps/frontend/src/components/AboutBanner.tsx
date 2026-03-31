import React from "react";
import { useNavigate } from "@tanstack/react-router";

const AboutBanner: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full flex justify-center py-10 bg-white">
      <div className="relative w-full max-w-[800px] px-6 flex flex-col items-center text-center">

        {/* Maharashtra map background */}
        <img
          src="/assets/maharshtra.png"
          alt=""
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] object-contain opacity-30 pointer-events-none select-none"
          style={{ filter: "sepia(1) saturate(0.4) hue-rotate(340deg) brightness(1.1)" }}
        />

        {/* MCZMA filled logo (leaf-textured letters) */}
        <div className="relative z-10 w-full max-w-[560px]">
          <img
            src="/assets/mczma_filled.png"
            alt="MPCB"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text content */}
        <div className="relative z-10 mt-6 flex flex-col items-center gap-6 max-w-[620px]">
          <div className="flex flex-col gap-2">
            <h3 className="text-[18px] md:text-[22px] font-bold text-[#043174]">Our Mission</h3>
            <p className="text-[14px] md:text-[15px] text-[#444444] leading-relaxed">
              The Maharashtra Coastal Zone Management Authority (MCZMA) aims to protect and improve the quality of the coastal environment in the state. It works to prevent and control pollution in coastal areas. It also ensures that development activities comply with Coastal Regulation Zone (CRZ) norms.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[18px] md:text-[22px] font-bold text-[#043174]">Our Vision</h3>
            <p className="text-[14px] md:text-[15px] text-[#444444] leading-relaxed">
              The vision of MCZMA is to achieve sustainable and balanced development along Maharashtra's coastline. It focuses on conserving fragile ecosystems like mangroves and wetlands. It aims to maintain long-term ecological stability while supporting economic growth.
            </p>
          </div>
          <button onClick={() => navigate({ to: '/about' })} className="mt-2 px-8 py-3 cursor-pointer bg-[#043174] hover:bg-[#2B8EEF] text-white text-[15px] font-medium rounded-2xl transition-colors duration-200">
            Read More
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutBanner;
