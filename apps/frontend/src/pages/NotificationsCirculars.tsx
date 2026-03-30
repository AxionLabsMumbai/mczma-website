import React, { useState, useRef, useEffect } from "react";
import PageBanner from "../components/PageBanner";
import { FileText, RotateCcw, Search, ChevronLeft, ChevronRight, ChevronDown, Check, Eye, Download, Calendar } from "lucide-react";

interface NotificationItem {
  id: number;
  date: string;
  title: string;
  fileSize: string;
  category: "Notification" | "Circular" | "Order";
  pdfUrl: string;
}

const allNotifications: NotificationItem[] = [
  { id: 1,  date: "7 Jul 2025",   title: "MCZMA constitution 07.07.2025",              fileSize: "1.97 MB",    category: "Notification", pdfUrl: "#" },
  { id: 2,  date: "13 Dec 2021",  title: "MCZMA Constitution Order 13.12.2021",        fileSize: "1.21 MB",    category: "Order",        pdfUrl: "#" },
  { id: 3,  date: "18 Jan 2019",  title: "CRZ Notification, 2019",                     fileSize: "777.06 KB",  category: "Notification", pdfUrl: "#" },
  { id: 4,  date: "18 Jan 2019",  title: "Marathi CRZ Notification, 2019",             fileSize: "1.15 MB",    category: "Notification", pdfUrl: "#" },
  { id: 5,  date: "6 Jul 2018",   title: "ORDER",                                      fileSize: "1.79 MB",    category: "Order",        pdfUrl: "#" },
  { id: 6,  date: "2 Jul 2018",   title: "Amendment Notification",                     fileSize: "1.73 MB",    category: "Notification", pdfUrl: "#" },
  { id: 7,  date: "6 Mar 2018",   title: "Amendment Notification",                     fileSize: "1.68 MB",    category: "Notification", pdfUrl: "#" },
  { id: 8,  date: "6 Oct 2017",   title: "Amendment Notification",                     fileSize: "1.39 MB",    category: "Notification", pdfUrl: "#" },
  { id: 9,  date: "31 Jul 2017",  title: "Amendment Notification",                     fileSize: "1.31 MB",    category: "Notification", pdfUrl: "#" },
  { id: 10, date: "3 May 2017",   title: "Amendment Notification",                     fileSize: "534.46 KB",  category: "Notification", pdfUrl: "#" },
  { id: 11, date: "6 Jan 2011",   title: "CRZ Notification, 2011",                     fileSize: "177.77 KB",  category: "Notification", pdfUrl: "#" },
  { id: 12, date: "6 Jan 2011",   title: "Form-I of CRZ Notification, 2011",           fileSize: "66.63 KB",   category: "Notification", pdfUrl: "#" },
  { id: 13, date: "14 Sep 2006",  title: "EIA Notification, 2006",                     fileSize: "256.38 KB",  category: "Notification", pdfUrl: "#" },
  { id: 14, date: "2 Sep 2005",   title: "ORDER",                                      fileSize: "1.50 MB",    category: "Order",        pdfUrl: "#" },
  { id: 15, date: "26 Nov 1998",  title: "ORDER",                                      fileSize: "8.53 KB",    category: "Order",        pdfUrl: "#" },
];

const categoryOptions = ["- Any -", "Notification", "Circular", "Order"];
const ITEMS_PER_PAGE = 9;

/* ── Reusable custom dropdown ── */
interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="flex flex-col gap-1.5 min-w-[180px]" ref={ref}>
      <label className="text-[12px] font-semibold text-[#555] uppercase tracking-wide">{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 bg-white border rounded-xl text-[13px] text-gray-700 shadow-sm transition-all cursor-pointer
            ${open ? "border-[#043174] ring-2 ring-[#043174]/10" : "border-gray-200 hover:border-gray-300"}`}
        >
          <span className={value === "- Any -" ? "text-gray-400" : "text-gray-800 font-medium"}>{value}</span>
          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <div className="absolute top-full left-0 mt-1.5 w-full bg-white border border-gray-200 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.10)] z-50 overflow-hidden">
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-[13px] transition-colors cursor-pointer text-left
                  ${value === opt ? "bg-[#043174]/5 text-[#043174] font-semibold" : "text-gray-700 hover:bg-gray-50"}`}
              >
                {opt}
                {value === opt && <Check className="w-3.5 h-3.5 text-[#043174]" />}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* ── Main page ── */
const NotificationsCirculars: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("- Any -");
  const [contentCategory, setContentCategory] = useState("- Any -");
  const [dateInput, setDateInput] = useState("");
  const [appliedCategory, setAppliedCategory] = useState("- Any -");
  const [appliedDate, setAppliedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = () => {
    setAppliedCategory(contentCategory !== "- Any -" ? contentCategory : selectedCategory);
    setAppliedDate(dateInput);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSelectedCategory("- Any -");
    setContentCategory("- Any -");
    setDateInput("");
    setAppliedCategory("- Any -");
    setAppliedDate("");
    setCurrentPage(1);
  };

  const filtered = allNotifications.filter((item) => {
    const catMatch = appliedCategory === "- Any -" || item.category === appliedCategory;
    const dateMatch = !appliedDate || item.date.includes(appliedDate);
    return catMatch && dateMatch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-white font-helvetica">
      <PageBanner
        image="/assets/banner1.jpg"
        title="Notifications & Circulars"
        subtitle="Official notifications and circulars issued by MCZMA"
      />

      <section className="w-full flex justify-center pb-16 bg-white">
        <div className="w-full max-w-[1100px] px-4 flex flex-col gap-6">

          {/* Filter Bar */}
          <div className="border border-gray-200 rounded-2xl px-6 py-5 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            <div className="flex flex-wrap items-end gap-5">

              <Dropdown
                label="Select"
                options={categoryOptions}
                value={selectedCategory}
                onChange={setSelectedCategory}
              />

              {/* Date */}
              <div className="flex flex-col gap-1.5 min-w-[160px]">
                <label className="text-[12px] font-semibold text-[#555] uppercase tracking-wide">Date</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="dd/mm/yyyy"
                    value={dateInput}
                    onChange={(e) => setDateInput(e.target.value)}
                    className="w-full border border-gray-200 hover:border-gray-300 focus:border-[#043174] focus:ring-2 focus:ring-[#043174]/10 rounded-xl pl-4 pr-10 py-2.5 text-[13px] text-gray-700 bg-white shadow-sm outline-none transition-all"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2"/>
                      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
                      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
                      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
                    </svg>
                  </span>
                </div>
              </div>

              <Dropdown
                label="Content Category"
                options={categoryOptions}
                value={contentCategory}
                onChange={setContentCategory}
              />

              {/* Buttons */}
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

          {/* Document Cards Grid */}
          {paginated.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <FileText className="w-12 h-12 text-gray-300 mb-3" />
              <p className="text-[15px] font-medium text-gray-500">No records found.</p>
              <p className="text-[13px] text-gray-400 mt-1">Try adjusting the filters above.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {paginated.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-[24px] p-5 flex flex-col gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:border-blue-100 transition-all duration-200"
                >
                  {/* Icon + title */}
                  <div className="flex gap-3">
                    <div className="w-11 h-11 bg-[#043174]/8 rounded-[14px] flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-[#043174]" />
                    </div>
                    <h4 className="text-[13px] md:text-[14px] font-semibold text-gray-800 leading-snug pt-0.5">
                      {item.title}
                    </h4>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-[12px] text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-red-400" />
                      {item.fileSize}
                    </span>
                  </div>

                  {/* Category badge */}
                  <span className="self-start px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-blue-50 text-[#043174]">
                    {item.category}
                  </span>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Action buttons */}
                  <div className="flex gap-2 pt-1 border-t border-gray-100">
                    <button className="flex-1 flex items-center justify-center gap-1.5 py-2 text-[12px] text-gray-600 border border-gray-200 rounded-xl hover:border-[#043174] hover:text-[#043174] transition-colors cursor-pointer">
                      <Eye className="w-3.5 h-3.5" />
                      View
                    </button>
                    <a
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 text-[12px] text-white bg-[#043174] rounded-xl hover:bg-[#032660] transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between pt-2">
              <p className="text-[13px] text-gray-500">
                Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, filtered.length)} of {filtered.length} entries
              </p>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg border text-[13px] transition-colors cursor-pointer
                    ${currentPage === 1 ? "border-gray-200 text-gray-300 cursor-not-allowed" : "border-gray-300 text-gray-600 hover:border-[#043174] hover:text-[#043174]"}`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {getPageNumbers().map((page, idx) =>
                  page === "..." ? (
                    <span key={`ellipsis-${idx}`} className="w-9 h-9 flex items-center justify-center text-gray-400 text-[13px]">…</span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page as number)}
                      className={`w-9 h-9 flex items-center justify-center rounded-lg text-[13px] font-medium transition-colors cursor-pointer
                        ${currentPage === page ? "bg-[#043174] text-white" : "text-gray-600 hover:bg-gray-100 border border-gray-200"}`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg border text-[13px] transition-colors cursor-pointer
                    ${currentPage === totalPages ? "border-gray-200 text-gray-300 cursor-not-allowed" : "border-gray-300 text-gray-600 hover:border-[#043174] hover:text-[#043174]"}`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default NotificationsCirculars;
