import React, { useState, useRef, useEffect } from "react";
import { FileText, Search, RotateCcw, ChevronDown, Check, ChevronLeft, ChevronRight } from "lucide-react";
import PageBanner from "../components/PageBanner";
import DocCard from "../components/DocCard";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  pdfUrl: string;
}

const projectItems: ProjectItem[] = [
  { id: 1,  title: "Coastal Road Project – Mumbai Phases I & II",                   category: "Infrastructure",  pdfUrl: "#" },
  { id: 2,  title: "Mumbai Trans Harbour Link – CRZ Clearance",                     category: "Infrastructure",  pdfUrl: "#" },
  { id: 3,  title: "Versova–Bandra Sea Link – Environmental Assessment",            category: "Infrastructure",  pdfUrl: "#" },
  { id: 4,  title: "Mangrove Restoration Project – Thane Creek",                    category: "Environment",     pdfUrl: "#" },
  { id: 5,  title: "Coastal Tourism Development – Sindhudurg",                      category: "Tourism",         pdfUrl: "#" },
  { id: 6,  title: "Fishing Harbour Modernisation – Ratnagiri",                     category: "Fisheries",       pdfUrl: "#" },
  { id: 7,  title: "Sewage Treatment Plant – Alibaug Coastal Zone",                 category: "Environment",     pdfUrl: "#" },
  { id: 8,  title: "Port Expansion – Jawaharlal Nehru Port",                        category: "Infrastructure",  pdfUrl: "#" },
  { id: 9,  title: "Beach Nourishment & Shore Protection – Palghar",                category: "Environment",     pdfUrl: "#" },
  { id: 10, title: "Coastal Tourism Resort – Raigad District",                      category: "Tourism",         pdfUrl: "#" },
  { id: 11, title: "Offshore Desalination Plant – Mumbai",                          category: "Infrastructure",  pdfUrl: "#" },
  { id: 12, title: "Wetland Conservation Project – Malvan Marine Sanctuary",        category: "Environment",     pdfUrl: "#" },
  { id: 13, title: "Fishing Jetty Construction – Palghar District",                 category: "Fisheries",       pdfUrl: "#" },
  { id: 14, title: "Coastal Erosion Mitigation – Ratnagiri Shoreline",              category: "Environment",     pdfUrl: "#" },
  { id: 15, title: "Eco-Tourism Development – Tadoba–Andhari Buffer Zone",          category: "Tourism",         pdfUrl: "#" },
  { id: 16, title: "Industrial Zone Development – Raigad Coastal Belt",             category: "Infrastructure",  pdfUrl: "#" },
  { id: 17, title: "Aquaculture Development Project – Sindhudurg",                  category: "Fisheries",       pdfUrl: "#" },
  { id: 18, title: "Coastal Highway Alignment Study – Konkan Region",              category: "Infrastructure",  pdfUrl: "#" },
];

const categoryOptions = ["- Any -", "Infrastructure", "Environment", "Tourism", "Fisheries"];

const PAGE_SIZE = 12;

/* ── Custom Dropdown ── */
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
    <div className="flex flex-col gap-1.5 w-full sm:min-w-[180px]" ref={ref}>
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
const Projects: React.FC = () => {
  const [titleInput, setTitleInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("- Any -");
  const [appliedTitle, setAppliedTitle] = useState("");
  const [appliedCategory, setAppliedCategory] = useState("- Any -");
  const [page, setPage] = useState(1);

  const handleSearch = () => {
    setAppliedTitle(titleInput);
    setAppliedCategory(categoryInput);
    setPage(1);
  };

  const handleReset = () => {
    setTitleInput("");
    setCategoryInput("- Any -");
    setAppliedTitle("");
    setAppliedCategory("- Any -");
    setPage(1);
  };

  const filtered = projectItems.filter((item) => {
    const matchTitle = !appliedTitle || item.title.toLowerCase().includes(appliedTitle.toLowerCase());
    const matchCategory = appliedCategory === "- Any -" || item.category === appliedCategory;
    return matchTitle && matchCategory;
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
        image="/assets/banner6.jpg"
        title="Projects"
        subtitle="Coastal development projects reviewed and cleared by MCZMA"
      />

      <section className="w-full flex justify-center pt-4 pb-16 bg-white">
        <div className="w-full max-w-[1100px] px-4 flex flex-col gap-6">

          {/* Filter bar */}
          <div className="border border-gray-200 rounded-2xl px-4 sm:px-6 py-4 sm:py-5 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            <div className="flex flex-wrap items-end gap-4">

              {/* Title */}
              <div className="flex flex-col gap-1.5 w-full sm:flex-1 sm:min-w-[200px]">
                <label className="text-[12px] font-semibold text-[#555] uppercase tracking-wide">Title</label>
                <input
                  type="text"
                  placeholder="Search by title..."
                  value={titleInput}
                  onChange={(e) => setTitleInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="w-full border border-gray-200 hover:border-gray-300 focus:border-[#043174] focus:ring-2 focus:ring-[#043174]/10 rounded-xl px-4 py-2.5 text-[13px] text-gray-700 bg-white shadow-sm outline-none transition-all"
                />
              </div>

              {/* Category */}
              <div className="w-full sm:w-auto">
                <Dropdown
                  label="Category"
                  options={categoryOptions}
                  value={categoryInput}
                  onChange={setCategoryInput}
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
            {(appliedTitle || appliedCategory !== "- Any -") && <span> — filtered results</span>}
          </p>

          {/* Cards */}
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
              <FileText className="w-12 h-12 text-gray-200" />
              <p className="text-[15px] font-semibold text-gray-400">No records found.</p>
              <p className="text-[13px] text-gray-300">Try a different title or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {paginated.map((item) => (
                <DocCard
                  key={item.id}
                  title={item.title}
                  category={item.category}
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

export default Projects;
