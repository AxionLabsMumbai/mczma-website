import React from "react";
import { useNavigate } from "@tanstack/react-router";
import { whatsNewItems } from "../data/whatsNewData";

const TOP_N = 8;

const meetingItems = [
  { label: "MCZMA Agenda", path: "/meeting-agenda" as const },
  { label: "MCZMA MOM", path: "/meeting-mom" as const },
  { label: "MCZMA Recommendation Letter", path: "/recommendation-letter" as const },
];

const InfoSection: React.FC = () => {
  const navigate = useNavigate();
  const displayItems = whatsNewItems.slice(0, TOP_N);

  return (
    <section className="w-full flex justify-center pt-25 pb-10 bg-white">
      <div className="w-full max-w-[1202px] px-4 flex flex-col md:flex-row justify-center gap-30">

        {/* Left: What's New */}
        <div className="relative w-full md:w-[380px] shrink-0">
          {/* Full background image */}
          <img
            src="/assets/mczma_whatsnew.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-fill absolute inset-0 rounded-2xl"
          />
          {/* Content overlaid on the image */}
          <div className="relative z-10 flex flex-col px-6 pt-10 pb-6">
            <h2 className="text-[24px] flex justify-center md:text-[28px] font-bold text-white mb-4">
              What's New
            </h2>
            <div className="flex flex-col divide-y divide-white/20 max-h-[300px] overflow-y-auto scrollbar-elegant">
              {displayItems.map((item) => (
                <div key={item.id} className="py-4 flex flex-col gap-1">
                  <p className="text-[13px] md:text-[14px] font-semibold text-white leading-snug">
                    {item.text}
                  </p>
                  <span className="text-[12px] text-orange-300 font-medium">{item.date}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex justify-center">
              <button
                onClick={() => navigate({ to: '/whats-new' })}
                className="px-7 py-2 bg-white/20 hover:bg-white/30 text-white text-[13px] font-semibold rounded-full border border-white/40 backdrop-blur-sm transition-all duration-200 tracking-wide cursor-pointer"
              >
                View All
              </button>
            </div>
          </div>
        </div>

        {/* Right: Meeting of MCZMA */}
        <div className="flex flex-col w-full md:w-[500px] shrink-0">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#111111] mb-5">
            Meeting of MCZMA
          </h2>
          <div className="flex flex-col gap-3 max-h-[360px] overflow-y-auto pr-1">
            {meetingItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-1 border border-gray-200 rounded-2xl px-5 py-4 bg-white"
              >
                <span className="text-[14px] md:text-[15px] font-semibold text-[#1A1A1A] leading-snug">
                  {item.label}
                </span>
                <button
                  onClick={() => item.path && navigate({ to: item.path })}
                  className="shrink-0 px-4 cursor-pointer py-1.5 border border-[#043174] text-[#043174] text-[13px] font-medium rounded-xl hover:bg-[#EBF5FF] transition-colors duration-200"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoSection;
