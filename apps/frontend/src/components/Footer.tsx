import React from "react";
import { Link } from "@tanstack/react-router";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-col items-center font-helvetica mt-[30px] overflow-hidden">

      {/* 1. CALL TO ACTION */}
      <div className="relative w-full max-w-[1100px] h-auto min-h-[320px] rounded-[24px] md:rounded-[48px] overflow-hidden -mb-32 z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 shadow-2xl mx-4">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/assets/banner1.jpg)" }}
        />
        {/* Blue overlay */}
        <div className="absolute inset-0 z-10 bg-[#005BFF] opacity-70" />
        {/* Content */}
        <div className="relative z-20 flex flex-col items-center py-10 md:py-0 md:mt-[20px]">
          <h2 className="text-[24px] md:text-[38px] font-bold text-white mb-2 tracking-tight">
            Need Assistance?
          </h2>
          <p className="text-[14px] md:text-[18px] text-white mb-8 md:mb-10 max-w-[600px] font-normal leading-relaxed">
            Our team is here to help you with coastal zone clearances, authorizations, and environmental compliance.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-[20px] w-full md:w-auto">
            <Link
              to="/contact-us"
              className="px-10 py-4 bg-white text-[#043174] rounded-2xl font-medium text-[18px] md:text-[22px] hover:bg-blue-50 transition-all shadow-lg hover:scale-105 active:scale-95 text-center flex items-center justify-center w-full md:w-auto"
            >
              Contact Us
            </Link>
            <Link
              to="/faq"
              className="px-10 py-4 bg-[#043174] border border-white/20 text-white rounded-2xl font-medium text-[18px] md:text-[22px] hover:bg-[#007ee0] transition-all shadow-lg hover:scale-105 active:scale-95 text-center flex items-center justify-center w-full md:w-auto"
            >
              View FAQs
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER */}
      <div className="w-full bg-[#003458] pt-40 md:pt-48 pb-10 flex flex-col items-center">
        <div className="w-full max-w-[1282px] grid grid-cols-1 md:grid-cols-12 gap-10 px-6 md:px-4">

          {/* Column 1: Logo & Address */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <div className="flex flex-row items-center gap-4">
              <div className="shrink-0 flex items-center justify-center md:ml-[-10px]">
                <img src="/assets/embelem.svg" alt="Emblem" className="w-[52px] h-[98px] object-contain" />
              </div>
              <div className="w-px h-[77px] bg-white shrink-0" />
              <div className="flex flex-col ml-[10px]">
                <p className="text-white text-[20px] font-medium leading-tight">Maharashtra Coastal</p>
                <p className="text-white text-[20px] font-medium leading-tight">Zone Management</p>
                <p className="text-white text-[20px] font-medium leading-tight">Authority</p>

              </div>
            </div>

            <p className="text-white/70 text-[14px] leading-relaxed max-w-[300px]">
              Mantralaya, Madam Cama Road, Hutatma Rajguru Chowk, Mumbai – 400 032, Maharashtra, India.
            </p>

            <div className="flex flex-col gap-1 text-[14px] text-white/70">
              <p><span className="text-white font-medium">Email:</span> mahamczma@gmail.com</p>
            </div>
          </div>

          {/* Column 2: Important Links */}
          <div className="col-span-1 md:col-span-8 flex flex-col pt-2">
            <h4 className="text-white text-[24px] md:text-[30px] font-bold tracking-wider mb-8 uppercase text-center w-full">
              Important Links
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 md:gap-y-4 px-4 text-[14px] text-center md:text-left">
              <ul className="flex flex-col gap-3">
                <li><a href="http://supremecourtofindia.nic.in/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">Supreme Court of India</a></li>
                <li><a href="http://bombayhighcourt.nic.in/index.html" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">High Court of Bombay</a></li>
                <li><a href="http://www.greentribunal.gov.in/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">National Green Tribunal</a></li>
                <li><a href="http://envfor.nic.in/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">MoEF &amp; CC, New Delhi</a></li>
                <li><a href="https://www.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">Govt. of Maharashtra</a></li>
                <li><a href="https://ec.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">SEIAA</a></li>
              </ul>
              <ul className="flex flex-col gap-3">
                <li><a href="http://mpcb.gov.in/index.php" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">MPCB</a></li>
                <li><a href="http://mahenvis.nic.in/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">Envis</a></li>
                <li><a href="http://www.mahaforest.nic.in/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">Forest Department</a></li>
                <li><a href="http://ww1.mangrovecell.org/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">Mangrove Cell</a></li>
                <li><a href="http://www.ncscm.res.in/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">NCSCM</a></li>
                <li><a href="https://www.annauniv.edu/RemoteSensing/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">IRS, Chennai</a></li>
              </ul>
              <ul className="flex flex-col gap-3">
                <li><a href="http://www.ncess.gov.in/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">NCESS, Kerala</a></li>
                <li><a href="http://www.nio.org/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">NIO, Goa</a></li>
                <li><a href="http://divcomkonkan.gov.in/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">Divisional Commissioner, Konkan</a></li>
                <li><a href="http://mumbaicity.gov.in/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">District Collector, Mumbai City</a></li>
                <li><a href="http://mumbaisuburban.gov.in/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">District Collector, Mumbai Suburban</a></li>
              </ul>
              <ul className="flex flex-col gap-3">
                <li><a href="http://www.thane.nic.in/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">District Collector, Thane</a></li>
                <li><a href="http://collectorpalghar.in/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">District Collector, Palghar</a></li>
                <li><a href="http://raigad.nic.in/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">District Collector, Raigad</a></li>
                <li><a href="http://ratnagiri.nic.in/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">District Collector, Ratnagiri</a></li>
                <li><a href="http://sindhudurg.nic.in/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-blue-300 transition-colors">District Collector, Sindhudurg</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. SUB-FOOTER */}
        <div className="w-full max-w-[1282px] mt-10 pt-10 border-t border-white/10 flex flex-col-reverse md:flex-row justify-between items-center text-white text-[13px] px-6 relative gap-8 md:gap-0">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-[14px] md:text-[16px] opacity-50">
              Copyright {currentYear}, Maharashtra Coastal Zone Management Authority. <p>All Rights Reserved.</p>
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-[14px] md:text-[16px]">
            <Link to="/" className="text-white/50 hover:text-white transition-colors">Sitemap</Link>
            <p className="text-white/50 w-full md:w-auto text-center">
              Powered by:{" "}
              <a
                href="https://axionailabs.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:text-[#00A3FF] transition-colors"
              >
                Axion AI Labs
              </a>
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
