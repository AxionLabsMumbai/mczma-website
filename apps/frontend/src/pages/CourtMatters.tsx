import React from "react";
import PageBanner from "../components/PageBanner";
import { Scale } from "lucide-react";

const CourtMatters: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-helvetica">
      <PageBanner
        image="/assets/banner4.jpg"
        title="Court Matters"
        subtitle="Legal proceedings and court orders — MCZMA"
      />

      <section className="w-full flex justify-center py-16 bg-white">
        <div className="flex flex-col items-center gap-4 text-center">
          <Scale className="w-14 h-14 text-gray-200" />
          <p className="text-[16px] font-semibold text-gray-400">No Records Found</p>
          <p className="text-[13px] text-gray-300">Court matter records will appear here once available.</p>
        </div>
      </section>
    </div>
  );
};

export default CourtMatters;
