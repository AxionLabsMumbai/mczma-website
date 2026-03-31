import React from "react";
import { FileText, Eye, Download, Calendar } from "lucide-react";

export interface MeetingDocCardProps {
  label: string;
  meetingNo: string;
  date: string;
  pdfUrl?: string;
}

const MeetingDocCard: React.FC<MeetingDocCardProps> = ({
  label,
  meetingNo,
  date,
  pdfUrl = "#",
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-[24px] p-6 flex flex-col gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:border-blue-100 transition-all duration-200">

      {/* Icon + label */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-[#043174]/[0.08] rounded-[14px] flex items-center justify-center shrink-0">
          <FileText className="w-5 h-5 text-[#043174]" />
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400 mb-0.5">{label}</p>
          <p className="text-[14px] font-bold text-[#1a1a1a]">Meeting No. {meetingNo}</p>
        </div>
      </div>

      <div className="border-t border-gray-100" />

      {/* Meeting no + date */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-[13px]">
          <span className="text-gray-500 font-medium">Meeting Number</span>
          <span className="text-[#043174] font-bold">{meetingNo}</span>
        </div>
        <div className="flex items-center justify-between text-[13px]">
          <span className="text-gray-500 font-medium flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-gray-400" />
            Date
          </span>
          <span className="text-[#043174] font-bold">{date}</span>
        </div>
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

export default MeetingDocCard;
