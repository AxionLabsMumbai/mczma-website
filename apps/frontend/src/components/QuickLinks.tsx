import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Waves,
  MessageCircle,
  FolderKanban,
  ClipboardCheck,
  Scale,
  HandCoins,
} from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

interface QuickLink {
  id: number;
  title: string;
  external?: string;
  icon: React.ReactNode;
  path: string;
}

const quickLinks: QuickLink[] = [
  { id: 1, title: "Wetland",        icon: <Waves className="w-8 h-8 text-blue-500" />,          path: "/wetland" },
  { id: 2, title: "Complaints",     icon: <MessageCircle className="w-8 h-8 text-blue-500" />,  path: "/complaints", external: "https://grievances.maharashtra.gov.in/en" },
  { id: 3, title: "Projects",       icon: <FolderKanban className="w-8 h-8 text-blue-500" />,   path: "/projects" },
  { id: 4, title: "DCZMC",          icon: <ClipboardCheck className="w-8 h-8 text-blue-500" />, path: "/dczmc" },
  { id: 5, title: "RTI",            icon: <HandCoins className="w-8 h-8 text-blue-500" />,      path: "/rti", external: "https://rtionline.maharashtra.gov.in/" },
  { id: 6, title: "Court Matters",  icon: <Scale className="w-8 h-8 text-blue-500" />,          path: "/court-matters" },
];

const QuickLinkCard: React.FC<{ link: QuickLink }> = ({ link }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => link.external ? window.open(link.external, '_blank', 'noopener,noreferrer') : navigate({ to: link.path })}
      className="w-full min-h-[120px] h-auto p-4 md:p-5 border border-gray-100 rounded-[20px] md:rounded-[24px] bg-white flex items-center justify-between group cursor-pointer hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] hover:border-blue-100 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="shrink-0 w-[50px] h-[50px] md:w-[64px] md:h-[64px] bg-[#EBF5FF] rounded-[16px] md:rounded-[20px] flex items-center justify-center">
          {link.icon}
        </div>
        <h3 className="text-[14px] md:text-[16px] font-bold text-[#1A1A1A] leading-tight">
          {link.title}
        </h3>
      </div>
      <div className="self-start mt-1 shrink-0">
        <ArrowUpRight className="w-5 h-5 text-[#C7C7C7] group-hover:text-blue-500 transition-colors" />
      </div>
    </div>
  );
};

const QuickLinks: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isExpanded] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (carouselRef.current) setViewportWidth(carouselRef.current.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const itemsPerPage = 6;
  const pages: QuickLink[][] = [];
  if (quickLinks.length <= itemsPerPage) {
    pages.push(quickLinks);
  } else {
    for (let i = 0; i < quickLinks.length; i += itemsPerPage) {
      pages.push(quickLinks.slice(i, i + itemsPerPage));
    }
  }
  const totalPages = pages.length;

  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, totalPages - 1));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const nextMobile = () => setMobileIndex((prev) => (prev + 1) % quickLinks.length);
  const prevMobile = () => setMobileIndex((prev) => (prev - 1 + quickLinks.length) % quickLinks.length);

  return (
    <div className="flex flex-col items-center w-full py-6 md:py-10 bg-white font-helvetica overflow-hidden">
      <div className="relative w-full max-w-[1202px] px-4">

        {/* Header */}
        <div className="flex justify-between items-center mb-5 md:mb-8">
          <h2 className="text-[22px] md:text-[40px] font-semibold text-[#111111] tracking-tight">
            Quick Links
          </h2>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden w-full">
          {!isExpanded ? (
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={prevMobile}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 shadow-sm active:scale-95 shrink-0"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="flex-1 min-w-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={mobileIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <QuickLinkCard link={quickLinks[mobileIndex]} />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <button
                  onClick={nextMobile}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 shadow-sm active:scale-95 shrink-0"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex justify-center gap-1.5 flex-wrap px-4">
                {quickLinks.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === mobileIndex ? "w-6 bg-blue-500" : "w-1.5 bg-gray-200"}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {quickLinks.map((link, idx) => <QuickLinkCard key={idx} link={link} />)}
            </div>
          )}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block relative">
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              <motion.div
                key="carousel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative flex items-center"
              >
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className={`absolute -left-14 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm text-gray-400 hover:text-blue-500 transition-all ${currentIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>

                <div ref={carouselRef} className="overflow-hidden w-full">
                  {viewportWidth > 0 && (
                    <motion.div
                      className="flex"
                      style={{ width: `${viewportWidth * pages.length}px` }}
                      animate={{ x: -(currentIndex * viewportWidth) }}
                      transition={{ type: "spring", stiffness: 220, damping: 28 }}
                    >
                      {pages.map((page, pageIdx) => (
                        <div
                          key={pageIdx}
                          className="shrink-0 grid grid-cols-3 grid-rows-2 gap-4"
                          style={{ width: `${viewportWidth}px` }}
                        >
                          {page.map((link) => (
                            <QuickLinkCard key={`${pageIdx}-${link.id}`} link={link} />
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>

                <button
                  onClick={nextSlide}
                  disabled={currentIndex >= totalPages - 1}
                  className={`absolute -right-14 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm text-gray-400 hover:text-blue-500 transition-all ${currentIndex >= totalPages - 1 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-3 gap-4"
              >
                {quickLinks.map((link, idx) => <QuickLinkCard key={idx} link={link} />)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
