import React from "react";
import { Mail, Phone } from "lucide-react";
import PageBanner from "../components/PageBanner";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-helvetica">
      <PageBanner
        image="/assets/banner6.jpg"
        title="Contact Us"
        subtitle="Get in touch with the Maharashtra Coastal Zone Management Authority"
      />

      <section className="w-full flex justify-center py-12 bg-white">
        <div className="w-full max-w-[1200px] px-4 flex flex-col lg:flex-row gap-8">

          {/* ── Left: Contact Cards ── */}
          <div className="w-full lg:w-[480px] shrink-0 flex flex-col gap-5">

            {/* Card 1: Chairman */}
            <div className="border border-gray-200 rounded-2xl p-4 md:p-6 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col gap-3">
                <div className="border-l-4 border-[#043174] pl-3">
                <p className="text-[14px] font-bold text-[#1a1a1a]">
                    Maharashtra Coastal Zone Management Authority - Chairman,
                  </p>
                  <p className="text-[13px] text-[#043174] mt-0.5">
                    Principal Secretary, Environment Department, 2nd Floor, Room No. 217, Annexe Building, Mantralaya, Mumbai- 32.
                  </p>
                </div>
                <div className="flex items-start gap-2 text-[13px] text-gray-700">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" />
                  <span>+ 022-22873845 / 022- 22825973 / 022- 22793132</span>
                </div>
                <div className="flex items-center gap-2 text-[13px]">
                  <Mail className="w-4 h-4 shrink-0 text-gray-400" />
                  <a href="mailto:psec.env@maharashtra.gov.in" className="text-[#043174] hover:underline">
                    psec.env@maharashtra.gov.in
                  </a>
                </div>
              
            </div>

            {/* Card 2: Member Secretary */}
            <div className="border border-gray-200 rounded-2xl p-4 md:p-6 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col gap-3">
              <div className="border-l-4 border-[#043174] pl-3">
                <p className="text-[14px] font-bold text-[#1a1a1a]">
                  Maharashtra Coastal Zone Management Authority - Member Secretary,
                </p>
                <p className="text-[13px] text-[#043174] mt-0.5">
                  Director, Environment Department, 15th Floor, New Administrative Building, Opp. Mantralaya, Mumbai – 32.
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-1">
                <div className="flex items-center gap-2 text-[13px] text-gray-700">
                  <Phone className="w-4 h-4 shrink-0 text-gray-400" />
                  <span>+ 022 - 22029388</span>
                </div>
                <div className="flex items-center gap-2 text-[13px] text-gray-700">
                  <Phone className="w-4 h-4 shrink-0 text-gray-400" />
                  <span>+ 022-22025946</span>
                </div>
                <div className="flex items-center gap-2 text-[13px]">
                  <Mail className="w-4 h-4 shrink-0 text-gray-400" />
                  <a href="mailto:dir1.mev-mh@nic.in" className="text-[#043174] hover:underline">
                    dir1.mev-mh@nic.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Google Maps ── */}
          <div className="flex-1 min-h-[280px] sm:min-h-[380px] lg:min-h-[480px] rounded-2xl overflow-hidden border border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <iframe
              title="MCZMA Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.0893807698917!2d72.82436257527988!3d18.927437482246848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1398ced36ff%3A0x437b60e514aeeb50!2sMantralaya%20Mumbai%20Maharashtra!5e0!3m2!1sen!2sin!4v1774943119755!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "280px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactUs;


