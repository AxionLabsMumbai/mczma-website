import React, { useState } from "react";
import { FileText, Search, RotateCcw } from "lucide-react";
import PageBanner from "../components/PageBanner";
import RecommendationDocCard from "../components/RecommendationDocCard";

interface RecommendationItem {
  id: number;
  title: string;
  meetingNo: string;
  startDate: string;
  endDate: string;
  fileName: string;
  fileSize: string;
  pdfUrl: string;
}

const recommendationItems: RecommendationItem[] = [
  { id: 1,  title: "MCZMA Recommendation Letter – 193rd Meeting", meetingNo: "193", startDate: "13-Jan-2026", endDate: "19-Jan-2026", fileName: "Letter_193.pdf", fileSize: "214.50 KB", pdfUrl: "#" },
  { id: 2,  title: "MCZMA Recommendation Letter – 192nd Meeting (Day Two)", meetingNo: "192", startDate: "20-Dec-2025", endDate: "26-Dec-2025", fileName: "Letter_192B.pdf", fileSize: "198.30 KB", pdfUrl: "#" },
  { id: 3,  title: "MCZMA Recommendation Letter – 192nd Meeting (Day One)", meetingNo: "192", startDate: "14-Dec-2025", endDate: "20-Dec-2025", fileName: "Letter_192A.pdf", fileSize: "176.31 KB", pdfUrl: "#" },
  { id: 4,  title: "MCZMA Recommendation Letter – 191st Meeting", meetingNo: "191", startDate: "22-Nov-2025", endDate: "28-Nov-2025", fileName: "Letter_191.pdf", fileSize: "189.75 KB", pdfUrl: "#" },
  { id: 5,  title: "MCZMA Recommendation Letter – 190th Meeting", meetingNo: "190", startDate: "18-Oct-2025", endDate: "24-Oct-2025", fileName: "Letter_190.pdf", fileSize: "203.12 KB", pdfUrl: "#" },
  { id: 6,  title: "MCZMA Recommendation Letter – 189th Meeting", meetingNo: "189", startDate: "13-Sep-2025", endDate: "19-Sep-2025", fileName: "Letter_189.pdf", fileSize: "167.88 KB", pdfUrl: "#" },
  { id: 7,  title: "MCZMA Recommendation Letter – 188th Meeting", meetingNo: "188", startDate: "09-Aug-2025", endDate: "15-Aug-2025", fileName: "Letter_188.pdf", fileSize: "176.31 KB", pdfUrl: "#" },
  { id: 8,  title: "MCZMA Recommendation Letter – 187th Meeting", meetingNo: "187", startDate: "12-Jul-2025", endDate: "18-Jul-2025", fileName: "Letter_187.pdf", fileSize: "155.40 KB", pdfUrl: "#" },
  { id: 9,  title: "MCZMA Recommendation Letter – 186th Meeting", meetingNo: "186", startDate: "14-Jun-2025", endDate: "20-Jun-2025", fileName: "Letter_186.pdf", fileSize: "181.60 KB", pdfUrl: "#" },
  { id: 10, title: "MCZMA Recommendation Letter – 185th Meeting", meetingNo: "185", startDate: "10-May-2025", endDate: "16-May-2025", fileName: "Letter_185.pdf", fileSize: "192.25 KB", pdfUrl: "#" },
  { id: 11, title: "MCZMA Recommendation Letter – 184th Meeting", meetingNo: "184", startDate: "12-Apr-2025", endDate: "18-Apr-2025", fileName: "Letter_184.pdf", fileSize: "168.90 KB", pdfUrl: "#" },
  { id: 12, title: "MCZMA Recommendation Letter – 183rd Meeting", meetingNo: "183", startDate: "08-Mar-2025", endDate: "14-Mar-2025", fileName: "Letter_183.pdf", fileSize: "174.55 KB", pdfUrl: "#" },
];

const RecommendationLetter: React.FC = () => {
  const [query, setQuery] = useState("");
  const [applied, setApplied] = useState("");

  const handleSearch = () => setApplied(query);
  const handleReset = () => { setQuery(""); setApplied(""); };

  const filtered = recommendationItems.filter((item) =>
    !applied ||
    item.title.toLowerCase().includes(applied.toLowerCase()) ||
    item.meetingNo.includes(applied)
  );

  return (
    <div className="min-h-screen bg-white font-helvetica">
      <PageBanner
        image="/assets/banner3.jpg"
        title="MCZMA Recommendation Letters"
        subtitle="Official recommendation letters issued following MCZMA meetings"
      />

      <section className="w-full flex justify-center pb-16 bg-white">
        <div className="w-full max-w-[1100px] px-4 flex flex-col gap-6">

          {/* Search filter */}
          <div className="border border-gray-200 rounded-2xl px-6 py-5 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            <div className="flex flex-wrap items-end gap-5">
              <div className="flex flex-col gap-1.5 flex-1 min-w-[220px]">
                <label className="text-[12px] font-semibold text-[#555] uppercase tracking-wide">Search by Title / Meeting No.</label>
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
            Showing {filtered.length} of {recommendationItems.length} records
            {applied && <span> for "<span className="font-medium text-gray-600">{applied}</span>"</span>}
          </p>

          {/* Cards grid */}
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
              <FileText className="w-12 h-12 text-gray-200" />
              <p className="text-[15px] font-semibold text-gray-400">No records found.</p>
              <p className="text-[13px] text-gray-300">Try a different search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((item) => (
                <RecommendationDocCard
                  key={item.id}
                  title={item.title}
                  meetingNo={item.meetingNo}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  fileName={item.fileName}
                  fileSize={item.fileSize}
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

export default RecommendationLetter;
