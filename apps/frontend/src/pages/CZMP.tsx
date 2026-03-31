import React, { useState } from "react";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import PageBanner from "../components/PageBanner";
import DocCard from "../components/DocCard";

const czmpDistricts = [
  "Approved CZMP of Mumbai City & Suburban Districts 2019",
  "Approved CZMP of Sindhudurg District 2019",
  "Approved CZMP of Ratnagiri District 2019",
  "Approved CZMP of Raigad District 2019",
  "Approved CZMP of Palghar District 2019",
  "Approved CZMP of Thane District 2019",
];

const czmpDocs: Record<string, { title: string; date: string; fileSize: string; pdfUrl: string }[]> = {
  "Approved CZMP of Mumbai City & Suburban Districts 2019": [
    { title: "CZMP Report – Mumbai City & Suburban Districts 2019", date: "Jan 2019", fileSize: "12.4 MB", pdfUrl: "#" },
    { title: "CRZ Map – Mumbai City District", date: "Jan 2019", fileSize: "8.2 MB", pdfUrl: "#" },
    { title: "CRZ Map – Mumbai Suburban District", date: "Jan 2019", fileSize: "9.1 MB", pdfUrl: "#" },
  ],
  "Approved CZMP of Sindhudurg District 2019": [
    { title: "CZMP Report – Sindhudurg District 2019", date: "Jan 2019", fileSize: "7.8 MB", pdfUrl: "#" },
    { title: "CRZ Map – Sindhudurg District", date: "Jan 2019", fileSize: "5.3 MB", pdfUrl: "#" },
  ],
  "Approved CZMP of Ratnagiri District 2019": [
    { title: "CZMP Report – Ratnagiri District 2019", date: "Jan 2019", fileSize: "9.2 MB", pdfUrl: "#" },
    { title: "CRZ Map – Ratnagiri District", date: "Jan 2019", fileSize: "6.7 MB", pdfUrl: "#" },
  ],
  "Approved CZMP of Raigad District 2019": [
    { title: "CZMP Report – Raigad District 2019", date: "Jan 2019", fileSize: "8.5 MB", pdfUrl: "#" },
    { title: "CRZ Map – Raigad District", date: "Jan 2019", fileSize: "5.9 MB", pdfUrl: "#" },
  ],
  "Approved CZMP of Palghar District 2019": [
    { title: "CZMP Report – Palghar District 2019", date: "Jan 2019", fileSize: "7.1 MB", pdfUrl: "#" },
    { title: "CRZ Map – Palghar District", date: "Jan 2019", fileSize: "4.8 MB", pdfUrl: "#" },
  ],
  "Approved CZMP of Thane District 2019": [
    { title: "CZMP Report – Thane District 2019", date: "Jan 2019", fileSize: "8.9 MB", pdfUrl: "#" },
    { title: "CRZ Map – Thane District", date: "Jan 2019", fileSize: "6.2 MB", pdfUrl: "#" },
  ],
};

const CZMP: React.FC = () => {
  const [accordionOpen, setAccordionOpen] = useState(true);
  const [activeDistrict, setActiveDistrict] = useState(czmpDistricts[0]);

  const docs = czmpDocs[activeDistrict] ?? [];

  return (
    <div className="min-h-screen bg-white font-helvetica">
      <PageBanner
        image="/assets/banner3.jpg"
        title="CZMP"
        subtitle="Coastal Zone Management Plans — Maharashtra"
      />

      <section className="w-full flex justify-center py-10 bg-white">
        <div className="w-full max-w-[1200px] px-4 flex flex-col lg:flex-row gap-8">

          {/* ── Sidebar ── */}
          <div className="w-full lg:w-[300px] shrink-0 flex flex-col gap-3">

            {/* Accordion header */}
            <div
              onClick={() => setAccordionOpen((o) => !o)}
              className={`flex items-center justify-between px-5 py-4 rounded-2xl cursor-pointer transition-all duration-300 select-none
                ${accordionOpen
                  ? "bg-[#043174] text-white shadow-lg shadow-blue-200"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-[#043174] hover:text-[#043174]"}`}
            >
              <span className="text-[14px] font-semibold">Approved CZMPs 2019</span>
              {accordionOpen
                ? <ChevronUp className="w-4 h-4" />
                : <ChevronDown className="w-4 h-4 text-gray-400" />}
            </div>

            {/* Sub-items — pill style like Image #17 */}
            <div className={`flex flex-col gap-2 overflow-hidden transition-all duration-400 ease-in-out ${accordionOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
              {czmpDistricts.map((district) => {
                const isActive = activeDistrict === district;
                return (
                  <button
                    key={district}
                    onClick={() => setActiveDistrict(district)}
                    className={`w-full flex items-center justify-between px-5 py-3.5 rounded-2xl text-[13px] font-medium text-left transition-all duration-200 cursor-pointer border
                      ${isActive
                        ? "bg-blue-50 border-[#043174] text-[#043174]"
                        : "bg-white border-gray-200 text-[#043174] hover:border-[#043174] hover:bg-blue-50/50"}`}
                  >
                    <span className="leading-snug">{district}</span>
                    {isActive && <ChevronRight className="w-4 h-4 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Content ── */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h2 className="text-[20px] md:text-[24px] font-bold text-[#043174]">{activeDistrict}</h2>
              <div className="h-[3px] w-12 rounded-full bg-[#043174]" />
            </div>

            {docs.length === 0 ? (
              <div className="flex items-center justify-center py-20 text-gray-400 text-[14px]">
                No documents available.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {docs.map((doc, idx) => (
                  <DocCard key={idx} {...doc} />
                ))}
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default CZMP;
