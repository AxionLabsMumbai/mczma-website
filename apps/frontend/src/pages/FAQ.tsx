import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import PageBanner from "../components/PageBanner";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What is MCZMA?",
    answer:
      "MCZMA (Maharashtra Coastal Zone Management Authority) is a state-level body responsible for implementing Coastal Regulation Zone (CRZ) rules and protecting coastal environments in Maharashtra.",
  },
  {
    id: 2,
    question: "What are the main functions of MCZMA?",
    answer:
      "MCZMA evaluates project proposals, grants CRZ clearances, monitors compliance, and ensures protection of coastal ecosystems as per government regulations.",
  },
  {
    id: 3,
    question: "What is the Coastal Regulation Zone (CRZ)?",
    answer:
      "CRZ refers to coastal areas regulated under environmental laws to control development activities and protect coastal ecosystems.",
  },
  {
    id: 4,
    question: "What are the different CRZ categories?",
    answer:
      "CRZ areas are classified into CRZ-I (ecologically sensitive), CRZ-II (developed areas), CRZ-III (rural/undeveloped areas), and CRZ-IV (water areas).",
  },
  {
    id: 5,
    question: "How can I check if my land falls under CRZ?",
    answer:
      "You can verify this through approved Coastal Zone Management Plan (CZMP) maps available on the MCZMA website or by consulting authorized experts.",
  },
  {
    id: 6,
    question: "When is MCZMA approval required?",
    answer:
      "Approval is required for construction, infrastructure, or development activities within CRZ-notified areas.",
  },
  {
    id: 7,
    question: "What types of projects need CRZ clearance?",
    answer:
      "Projects such as buildings, roads, ports, pipelines, tourism facilities, and industrial developments in coastal areas require CRZ clearance.",
  },
  {
    id: 8,
    question: "How do I apply for CRZ clearance?",
    answer:
      "Applications can be submitted online through the MCZMA portal along with required documents and fees.",
  },
  {
    id: 9,
    question: "What documents are required for CRZ clearance?",
    answer:
      "Typical documents include project reports, CZMP maps, layout plans, environmental impact assessments (if applicable), and ownership documents.",
  },
  {
    id: 10,
    question: "How long does the approval process take?",
    answer:
      "The timeline varies depending on project complexity, but generally ranges from a few weeks to a few months.",
  },
  {
    id: 11,
    question: "Can I track my application status?",
    answer:
      "Yes, applicants can track their application status through the online portal using their application ID.",
  },
  {
    id: 12,
    question: "What happens if my application is rejected?",
    answer:
      "You may revise and resubmit the application or address the reasons for rejection as specified by MCZMA.",
  },
  {
    id: 13,
    question: "What is a Coastal Zone Management Plan (CZMP)?",
    answer:
      "CZMP is an official map and document that defines CRZ boundaries and permissible activities in coastal areas.",
  },
  {
    id: 14,
    question: "What are No Development Zones (NDZ)?",
    answer:
      "NDZ are areas where construction and development activities are restricted to protect coastal ecology.",
  },
  {
    id: 15,
    question: "What happens if CRZ rules are violated?",
    answer:
      "Violations may lead to penalties, demolition of illegal structures, and legal action under environmental laws.",
  },
  {
    id: 16,
    question: "Can violations be regularized?",
    answer:
      "In most cases, violations cannot be regularized and must comply with CRZ regulations or face legal consequences.",
  },
  {
    id: 17,
    question: "How can I report illegal construction in coastal areas?",
    answer:
      "You can report violations to MCZMA through the official website or by contacting the authority directly.",
  },
  {
    id: 18,
    question: "Are there restrictions near mangroves and wetlands?",
    answer:
      "Yes, strict restrictions apply to protect sensitive ecosystems like mangroves, wetlands, and coral reefs.",
  },
  {
    id: 19,
    question: "Who can prepare CRZ maps and reports?",
    answer:
      "Qualified and authorized environmental consultants or agencies typically prepare CRZ maps and reports.",
  },
  {
    id: 20,
    question: "How can I contact MCZMA?",
    answer:
      "You can contact MCZMA via their official website, email, or office contact details provided in the contact section.",
  },
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="min-h-screen bg-white font-helvetica">
      <PageBanner
        image="/assets/banner2.jpg"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about MCZMA and coastal zone regulations"
      />

      <section className="w-full flex justify-center py-12 bg-white">
        <div className="w-full max-w-[860px] px-4 flex flex-col gap-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? "border-[#043174]/30 shadow-[0_4px_16px_rgba(4,49,116,0.08)]"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold transition-colors ${
                        isOpen
                          ? "bg-[#043174] text-white"
                          : "bg-[#043174]/[0.08] text-[#043174]"
                      }`}
                    >
                      {faq.id}
                    </span>
                    <span
                      className={`text-[14px] md:text-[15px] font-semibold leading-snug transition-colors ${
                        isOpen ? "text-[#043174]" : "text-[#1a1a1a]"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-gray-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#043174]" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-[13px] md:text-[14px] text-gray-600 leading-relaxed border-t border-gray-100 pt-4 ml-11">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
