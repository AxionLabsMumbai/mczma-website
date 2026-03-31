import React from "react";
import { FileText, Eye, Download, Calendar } from "lucide-react";

export interface DocCardProps {
  title: string;
  date?: string;
  fileSize?: string;
  category?: string;
  pdfUrl?: string;
}

const DocCard: React.FC<DocCardProps> = ({
  title,
  date,
  fileSize,
  category,
  pdfUrl = "#",
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-[24px] p-5 flex flex-col gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:border-blue-100 transition-all duration-200">

      {/* Icon + title */}
      <div className="flex gap-3">
        <div className="w-11 h-11 bg-[#043174]/[0.08] rounded-[14px] flex items-center justify-center shrink-0">
          <FileText className="w-5 h-5 text-[#043174]" />
        </div>
        <h4 className="text-[13px] md:text-[14px] font-semibold text-gray-800 leading-snug pt-0.5">
          {title}
        </h4>
      </div>

      {/* Meta row */}
      {(date || fileSize) && (
        <div className="flex items-center gap-4 text-[12px] text-gray-400 flex-wrap">
          {date && (
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {date}
            </span>
          )}
          {fileSize && (
            <span className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-red-400" />
              {fileSize}
            </span>
          )}
        </div>
      )}

      {/* Category badge */}
      {category && (
        <span className="self-start px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-blue-50 text-[#043174]">
          {category}
        </span>
      )}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Actions */}
      <div className="flex gap-2 pt-1 border-t border-gray-100">
        <button className="flex-1 flex items-center justify-center gap-1.5 py-2 text-[12px] text-gray-600 border border-gray-200 rounded-xl hover:border-[#043174] hover:text-[#043174] transition-colors cursor-pointer">
          <Eye className="w-3.5 h-3.5" />
          View
        </button>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 text-[12px] text-white bg-[#043174] rounded-xl hover:bg-[#032660] transition-colors cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          Download
        </a>
      </div>

    </div>
  );
};

export default DocCard;
