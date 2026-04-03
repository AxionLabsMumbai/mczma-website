import React, { useState } from "react";
import { FileText, Search, RotateCcw, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import PageBanner from "../components/PageBanner";
import MeetingDocCard from "../components/MeetingDocCard";

interface MOMItem {
  id: number;
  meetingNo: string;
  date: string;
  pdfUrl: string;
}

const momItems: MOMItem[] = [
  { id: 1,  meetingNo: "193", date: "19-Jan-2026", pdfUrl: "#" },
  { id: 2,  meetingNo: "192", date: "26-Dec-2025", pdfUrl: "#" },
  { id: 3,  meetingNo: "191", date: "28-Nov-2025", pdfUrl: "#" },
  { id: 4,  meetingNo: "190", date: "24-Oct-2025", pdfUrl: "#" },
  { id: 5,  meetingNo: "189", date: "19-Sep-2025", pdfUrl: "#" },
  { id: 6,  meetingNo: "188", date: "15-Aug-2025", pdfUrl: "#" },
  { id: 7,  meetingNo: "187", date: "18-Jul-2025", pdfUrl: "#" },
  { id: 8,  meetingNo: "186", date: "20-Jun-2025", pdfUrl: "#" },
  { id: 9,  meetingNo: "185", date: "16-May-2025", pdfUrl: "#" },
  { id: 10, meetingNo: "184", date: "18-Apr-2025", pdfUrl: "#" },
  { id: 11, meetingNo: "183", date: "14-Mar-2025", pdfUrl: "#" },
  { id: 12, meetingNo: "182", date: "14-Feb-2025", pdfUrl: "#" },
  { id: 13, meetingNo: "181", date: "17-Jan-2025", pdfUrl: "#" },
  { id: 14, meetingNo: "180", date: "20-Dec-2024", pdfUrl: "#" },
  { id: 15, meetingNo: "179", date: "22-Nov-2024", pdfUrl: "#" },
  { id: 16, meetingNo: "178", date: "25-Oct-2024", pdfUrl: "#" },
  { id: 17, meetingNo: "177", date: "20-Sep-2024", pdfUrl: "#" },
  { id: 18, meetingNo: "176", date: "16-Aug-2024", pdfUrl: "#" },
];

const PAGE_SIZE = 12;

const MeetingMOM: React.FC = () => {
  const [dateInput, setDateInput] = useState("");
  const [meetingInput, setMeetingInput] = useState("");
  const [appliedDate, setAppliedDate] = useState("");
  const [appliedMeeting, setAppliedMeeting] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = () => {
    setAppliedDate(dateInput);
    setAppliedMeeting(meetingInput);
    setPage(1);
  };

  const handleReset = () => {
    setDateInput("");
    setMeetingInput("");
    setAppliedDate("");
    setAppliedMeeting("");
    setPage(1);
  };

  const filtered = momItems.filter((item) => {
    const matchDate = !appliedDate || item.date.toLowerCase().includes(appliedDate.toLowerCase());
    const matchMeeting = !appliedMeeting || item.meetingNo.includes(appliedMeeting);
    return matchDate && matchMeeting;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (page > 3) pages.push("...");
      for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
        pages.push(i);
      }
      if (page < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-white font-helvetica">
      <PageBanner
        image="/assets/banner5.jpg"
        title="Minutes of Meeting"
        subtitle="Official minutes from MCZMA meetings — browse by date or meeting number"
      />

      <section className="w-full flex justify-center pt-4 pb-16 bg-white">
        <div className="w-full max-w-[1100px] px-4 flex flex-col gap-6">

          {/* Filter bar */}
          <div className="border border-gray-200 rounded-2xl px-4 sm:px-6 py-4 sm:py-5 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            <div className="flex flex-wrap items-end gap-4">

              {/* Date input */}
              <div className="flex flex-col gap-1.5 w-full sm:w-[200px]">
                <label className="text-[12px] font-semibold text-[#555] uppercase tracking-wide">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <input
                    type="date"
                    value={dateInput}
                    onChange={(e) => setDateInput(e.target.value)}
                    className="w-full border border-gray-200 hover:border-gray-300 focus:border-[#043174] focus:ring-2 focus:ring-[#043174]/10 rounded-xl pl-9 pr-3 py-2.5 text-[13px] text-gray-700 bg-white shadow-sm outline-none transition-all"
                  />
                </div>
              </div>

              {/* Meeting no input */}
              <div className="flex flex-col gap-1.5 w-full sm:w-[220px]">
                <label className="text-[12px] font-semibold text-[#555] uppercase tracking-wide">Search by Meeting No.</label>
                <input
                  type="text"
                  placeholder="e.g. 193"
                  value={meetingInput}
                  onChange={(e) => setMeetingInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="w-full border border-gray-200 hover:border-gray-300 focus:border-[#043174] focus:ring-2 focus:ring-[#043174]/10 rounded-xl px-4 py-2.5 text-[13px] text-gray-700 bg-white shadow-sm outline-none transition-all"
                />
              </div>

              {/* Buttons */}
              <div className="flex items-end gap-2 w-full sm:w-auto sm:ml-auto">
                <button
                  onClick={handleReset}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#043174] hover:bg-[#032660] text-white text-[13px] font-medium rounded-xl shadow-sm transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>
                <button
                  onClick={handleSearch}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#6c757d] hover:bg-[#5a6268] text-white text-[13px] font-medium rounded-xl shadow-sm transition-colors cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5" />
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Results count */}
          <p className="text-[13px] text-gray-400 -mt-2">
            Showing {paginated.length} of {filtered.length} records
            {(appliedDate || appliedMeeting) && <span> — filtered results</span>}
          </p>

          {/* Cards */}
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
              <FileText className="w-12 h-12 text-gray-200" />
              <p className="text-[15px] font-semibold text-gray-400">No records found.</p>
              <p className="text-[13px] text-gray-300">Try a different date or meeting number.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {paginated.map((item) => (
                <MeetingDocCard
                  key={item.id}
                  label="MCZMA MOM"
                  meetingNo={item.meetingNo}
                  date={item.date}
                  pdfUrl={item.pdfUrl}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1.5 mt-2 flex-wrap">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:border-[#043174] hover:text-[#043174] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {getPageNumbers().map((p, idx) =>
                p === "..." ? (
                  <span key={`ellipsis-${idx}`} className="w-9 h-9 flex items-center justify-center text-[13px] text-gray-400">
                    …
                  </span>
                ) : (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-9 h-9 flex items-center justify-center rounded-xl text-[13px] font-medium border transition-colors cursor-pointer ${
                      page === p
                        ? "bg-[#043174] text-white border-[#043174]"
                        : "border-gray-200 text-gray-600 hover:border-[#043174] hover:text-[#043174]"
                    }`}
                  >
                    {p}
                  </button>
                )
              )}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:border-[#043174] hover:text-[#043174] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default MeetingMOM;
