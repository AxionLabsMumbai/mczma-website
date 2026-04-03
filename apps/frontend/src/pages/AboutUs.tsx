import React from "react";
import PageBanner from "../components/PageBanner";

const rolePointers = [
  {
    text: "The Authority shall receive application for approval of project proposal and examine the same if it is in accordance with the approved Coastal Zone Management Plan and complies with the requirement of the Coastal Regulation Zone notification issued by the Government of India in the erstwhile Ministry of Environment and Forests vide number S.O. 19 (E), dated the 6th January, 2011 (hereinafter referred to as the said notification)' and make recommendations for approval of such project to the concerned authority as specified in the said notification, within a perid of sixty days from dated of receipt of such application.",
  },
  {
    text: "The Authority shall regulate all developmental activities in the coastal Regulation Zone areas as specified in the said notification;",
  },
  {
    text: "The Authority shall primarily be responsible for enforcing and monitoring the provisions of said notification;",
  },
  {
    text: "The Authority shall examine the proposals received from the State Government for changes or modifications, in the classifications of coastal Regulation Zone areas, and in the coastal zone Management Plan and make specific recommendations thereon, to the National Coastal Zone Management Authority.",
  },
  {
    text: "The Authority shall",
    sub: [
      "Inquire into cases of alleged violation of the provisions of the said Act and the rules made thereunder or any other law which is relatable to the objects of the said Act and, if found necessary, in any specific case, issue such directions under section 5 of the said Act as are not inconsistent with the directions issued in that specific case eithrer by the National Coastal Zone Management Authority or by the Central Government.",
      "Hold review of cases involving violations of the provisions of the said Act and the rules made there under, or under any other law which is relatable to the objects of the said Act, and if found necessary, refer such cases, along with its comments for review by the National coastal zone Management Authority: Provided that such inquiry or review of cases of violations may be taken up by the Authority suomoto, or on the basis of a complaint made by any individual or representative body or organization;",
    ],
  },
  {
    text: "The Authority may file complaints, under section 19 of the said Act, against any person for non-compliance of directions issued by it;",
  },
  {
    text: "The Authority shall take such action as may be required under section 10 of the said Act to verify the facts before it in any case.",
  },
];

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-helvetica">
      <PageBanner
        image="/assets/banner2.jpg"
        title="About Us"
        subtitle="Maharashtra Coastal Zone Management Authority"
      />

      <section className="w-full flex justify-center py-12 bg-white">
        <div className="w-full max-w-[900px] px-6 flex flex-col gap-10">

          {/* Intro card */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
            <p className="text-[15px] text-gray-700 leading-[1.85] text-left md:text-justify">
              It was in the year 1998 that the MoEF (under orders from the Supreme Court of India in 1996) constituted
              the Coastal Zone Management Authorities for each State having coastline (SCZMA) and National Coastal Zone
              Management Authority (NCZMA) to ensure the implementation of CRZ Notification, 1991. The State level
              Maharashtra Coastal Zone Management Authority (MCZMA) was constituted by the Ministry of Environment &amp;
              Forests in exercise of the powers conferred by sub-sections (l) and (3) of section 3 of the Environment
              (Protection) Act, 1986. The Authority have the power to take the necessary measures for protecting and
              improving the quality of the coastal environment and preventing, abating and controlling environmental
              pollution in the coastal areas. The Authority shall deal with environmental issues relating to Coastal
              Regulation Zone which may be referred to it by the State Government, the National Coastal Zone Management
              Authority or the Central Government. The MCZMA was constituted from time to time by the Ministry of
              Environment &amp; Forests, New Delhi, latest consist of 12 members, 8 members from different Govt.
              Departments like Revenue, Industries, Urban Development, MCGM etc. 4 members are expert members from
              multidisciplinary field. The MCZMA has been reconstituted on 13.04.2015 by the Ministry of Environment
              &amp; Forests, New Delhi.
            </p>
          </div>

          {/* Role of MCZMA */}
          <div className="flex flex-col gap-6">
            {/* Section heading */}
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 rounded-full bg-[#043174] shrink-0" />
              <h2 className="text-[22px] md:text-[26px] font-bold text-[#043174]">Role of MCZMA</h2>
            </div>

            {/* Intro sentence */}
            <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed pl-5">
              The Authority for the purposes of protecting and improving the quality of the coastal environment and
              preventing, abating and controlling environmental pollution in the coastal Regulation zone areas in the
              state of Maharashtra, shall take the following measures, namely:
            </p>

            {/* Pointer list */}
            <div className="flex flex-col gap-4 pl-2">
              {rolePointers.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  {/* Chevron bullet */}
                  <span className="mt-[3px] shrink-0 text-[#043174] font-bold text-[16px] leading-none select-none">›</span>
                  <div className="flex flex-col gap-3">
                    <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed">{item.text}</p>

                    {/* Sub-pointers */}
                    {item.sub && (
                      <div className="flex flex-col gap-3 pl-4 border-l-2 border-[#043174]/20 ml-1">
                        {item.sub.map((sub, sidx) => (
                          <div key={sidx} className="flex gap-3">
                            <span className="mt-[3px] shrink-0 text-[#043174]/70 font-bold text-[15px] leading-none select-none">›</span>
                            <p className="text-[14px] text-gray-600 leading-relaxed">{sub}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutUs;
