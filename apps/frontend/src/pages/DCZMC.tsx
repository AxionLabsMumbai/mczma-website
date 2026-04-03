import React, { useState } from "react";
import { FileText, ChevronLeft, ChevronRight } from "lucide-react";
import PageBanner from "../components/PageBanner";
import DocCard from "../components/DocCard";

const dczmcDocs = [
  { id: 1,  title: "DCZMC Constitution – Mumbai City & Suburban Districts" },
  { id: 2,  title: "DCZMC Constitution – Sindhudurg District" },
  { id: 3,  title: "DCZMC Constitution – Ratnagiri District" },
  { id: 4,  title: "DCZMC Constitution – Raigad District" },
  { id: 5,  title: "DCZMC Constitution – Palghar District" },
  { id: 6,  title: "DCZMC Constitution – Thane District" },
  { id: 7,  title: "DCZMC Meeting Minutes – Mumbai City & Suburban Districts" },
  { id: 8,  title: "DCZMC Meeting Minutes – Sindhudurg District" },
  { id: 9,  title: "DCZMC Meeting Minutes – Ratnagiri District" },
  { id: 10, title: "DCZMC Meeting Minutes – Raigad District" },
  { id: 11, title: "DCZMC Meeting Minutes – Palghar District" },
  { id: 12, title: "DCZMC Meeting Minutes – Thane District" },
  { id: 13, title: "DCZMC Inspection Report – Mumbai City & Suburban Districts" },
  { id: 14, title: "DCZMC Inspection Report – Sindhudurg District" },
];

const PAGE_SIZE = 12;

const DCZMC: React.FC = () => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(dczmcDocs.length / PAGE_SIZE);
  const paginated = dczmcDocs.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

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
        image="/assets/banner2.jpg"
        title="DCZMC"
        subtitle="District Coastal Zone Management Committees — Maharashtra"
      />

      <section className="w-full flex justify-center pt-4 pb-16 bg-white">
        <div className="w-full max-w-[1100px] px-4 flex flex-col gap-6">

          {/* Results count */}
          <p className="text-[13px] text-gray-400">
            Showing {paginated.length} of {dczmcDocs.length} records
          </p>

          {/* Cards grid */}
          {paginated.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
              <FileText className="w-12 h-12 text-gray-200" />
              <p className="text-[15px] font-semibold text-gray-400">No records found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {paginated.map((doc) => (
                <DocCard key={doc.id} title={doc.title} />
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

export default DCZMC;
