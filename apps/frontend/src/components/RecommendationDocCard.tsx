import React from "react";
import { FileText, Eye, Download, Calendar } from "lucide-react";

export interface RecommendationDocCardProps {
  title: string;
  meetingNo: string;
  startDate: string;
  endDate: string;
  fileName: string;
  fileSize: string;
  pdfUrl?: string;
}

const RecommendationDocCard: React.FC<RecommendationDocCardProps> = ({
  title,
  meetingNo,
  startDate,
  endDate,
  fileName,
  fileSize,
  pdfUrl = "#",
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-[24px] p-5 flex flex-col gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:border-blue-100 transition-all duration-200">

      {/* Icon + title */}
      <div className="flex gap-3">
        <div className="w-11 h-11 bg-[#043174]/[0.08] rounded-[14px] flex items-center justify-center shrink-0">
          <FileText className="w-5 h-5 text-[#043174]" />
        </div>
        <h4 className="text-[13px] md:text-[14px] font-semibold text-gray-800 leading-snug pt-0.5">
          {title}
        </h4>
      </div>

      {/* Meeting number */}
      <div className="flex items-center gap-2 text-[13px]">
        <span className="text-gray-500 font-medium">Meeting Number:</span>
        <span className="text-[#043174] font-semibold">{meetingNo}</span>
      </div>

      {/* Dates row */}
      <div className="flex flex-wrap gap-x-6 gap-y-1.5">
        <div className="flex items-center gap-2 text-[13px]">
          <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="text-gray-500 font-medium">Start Date:</span>
          <span className="text-[#043174] font-semibold">{startDate}</span>
        </div>
        <div className="flex items-center gap-2 text-[13px]">
          <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="text-gray-500 font-medium">End Date:</span>
          <span className="text-[#043174] font-semibold">{endDate}</span>
        </div>
      </div>

      {/* File info */}
      <div className="flex items-center gap-2 text-[12px] text-gray-400 bg-gray-50 rounded-xl px-3 py-2">
        <FileText className="w-3.5 h-3.5 text-red-400 shrink-0" />
        <span className="truncate font-medium text-gray-600">{fileName}</span>
        <span className="shrink-0">({fileSize})</span>
      </div>

      <div className="flex-1" />

      {/* Actions */}
      <div className="flex gap-2 border-t border-gray-100 pt-3">
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

export default RecommendationDocCard;
