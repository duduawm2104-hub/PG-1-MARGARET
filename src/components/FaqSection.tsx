import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../siteConfig';

interface FaqSectionProps {
  onOpenRefundPolicy: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenRefundPolicy }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F7F1E5] border-b border-[#A6AD8B]/25">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#4A582F]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#302D25] text-balance">
            Common Questions Answered
          </h2>
          <p className="text-sm sm:text-base text-[#57534E]">
            Everything you need to know about receiving and enjoying Margaret's digital guide.
          </p>
        </div>

        {/* 3 Essential Questions Accordion */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FAF6EE] rounded-2xl border border-[#A6AD8B]/35 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4 sm:py-5 px-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#302D25] hover:text-[#353D22] transition-colors cursor-pointer"
                >
                  <span className="flex-1">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#EFE8D8] flex items-center justify-center shrink-0 transition-transform duration-200 text-[#353D22] ${
                      isOpen ? 'rotate-180 bg-[#353D22] text-[#FAF6EE]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-[#A6AD8B]/20">
                    <p>{faq.answer}</p>
                    {index === 2 && (
                      <button
                        onClick={onOpenRefundPolicy}
                        className="mt-3 text-xs font-semibold text-[#353D22] hover:underline flex items-center gap-1"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-[#4A582F]" />
                        <span>Read our complete 30-Day Happiness Guarantee terms →</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
