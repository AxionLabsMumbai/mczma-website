import React, { useState } from "react";
import { RotateCcw, Search, FileText } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { whatsNewItems } from "../data/whatsNewData";
import DocCard from "../components/DocCard";

const WhatsNew: React.FC = () => {
  const [query, setQuery] = useState("");
  const [applied, setApplied] = useState("");

  const handleSearch = () => setApplied(query);
  const handleReset = () => { setQuery(""); setApplied(""); };

  const filtered = whatsNewItems.filter((item) =>
    !applied || item.text.toLowerCase().includes(applied.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white font-helvetica">
      <PageBanner
        image="/assets/banner5.jpg"
        title="What's New"
        subtitle="Latest updates, agendas and minutes from MCZMA"
      />

      <section className="w-full flex justify-center pb-16 bg-white">
        <div className="w-full max-w-[1100px] px-4 flex flex-col gap-6">

          {/* Search filter */}
          <div className="border border-gray-200 rounded-2xl px-6 py-5 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            <div className="flex flex-wrap items-end gap-5">
              <div className="flex flex-col gap-1.5 flex-1 min-w-[220px]">
                <label className="text-[12px] font-semibold text-[#555] uppercase tracking-wide">Search by Title</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Type to search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className="w-full border border-gray-200 hover:border-gray-300 focus:border-[#043174] focus:ring-2 focus:ring-[#043174]/10 rounded-xl pl-9 pr-4 py-2.5 text-[13px] text-gray-700 bg-white shadow-sm outline-none transition-all"
                  />
                </div>
              </div>
              <div className="flex items-end gap-2 pb-0.5">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 px-5 py-2.5 bg-[#043174] hover:bg-[#032660] text-white text-[13px] font-medium rounded-xl shadow-sm transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>
                <button
                  onClick={handleSearch}
                  className="flex items-center gap-1.5 px-5 py-2.5 bg-[#6c757d] hover:bg-[#5a6268] text-white text-[13px] font-medium rounded-xl shadow-sm transition-colors cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5" />
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Results count */}
          <p className="text-[13px] text-gray-400 -mt-2">
            Showing {filtered.length} of {whatsNewItems.length} records
            {applied && <span> for "<span className="font-medium text-gray-600">{applied}</span>"</span>}
          </p>

          {/* Doc cards grid */}
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
              <FileText className="w-12 h-12 text-gray-200" />
              <p className="text-[15px] font-semibold text-gray-400">No records found.</p>
              <p className="text-[13px] text-gray-300">Try a different search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((item) => (
                <DocCard
                  key={item.id}
                  title={item.text}
                  date={item.date}
                  pdfUrl={item.pdfUrl}
                />
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default WhatsNew;
