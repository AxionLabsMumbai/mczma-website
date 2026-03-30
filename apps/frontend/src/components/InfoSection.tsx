import React from "react";

const whatsNewItems = [
  { text: "Minutes of 193rd meeting of MCZMA held on 19.01.2026", date: "2 Feb 2026" },
  { text: "Minutes of 192nd meeting (Day Two) of MCZMA held on 26.12.2025", date: "14 Jan 2026" },
  { text: "Agenda for 193rd meeting of MCZMA to be held on 19.01.2026", date: "14 Jan 2026" },
  { text: "Minutes of 192nd meeting (Day One) of MCZMA held on 20th December, 2025", date: "8 Jan 2026" },
];

const meetingItems = [
  "MCZMA Agenda",
  "MCZMA MOM",
  "MCZMA Recommendation Letter",
];

const InfoSection: React.FC = () => {
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
              {whatsNewItems.map((item, idx) => (
                <div key={idx} className="py-4 flex flex-col gap-1">
                  <p className="text-[13px] md:text-[14px] font-semibold text-white leading-snug">
                    {item.text}
                  </p>
                  <span className="text-[12px] text-orange-300 font-medium">{item.date}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex justify-center">
              <button className="px-7 py-2 bg-white/20 hover:bg-white/30 text-white text-[13px] font-semibold rounded-full border border-white/40 backdrop-blur-sm transition-all duration-200 tracking-wide">
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
                  {item}
                </span>
                <button className="shrink-0 px-4 cursor-pointer py-1.5 border border-[#043174] text-[#043174] text-[13px] font-medium rounded-xl hover:bg-[#EBF5FF] transition-colors duration-200">
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
