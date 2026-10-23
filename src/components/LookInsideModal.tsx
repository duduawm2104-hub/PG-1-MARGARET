import React, { useState } from 'react';
import { X, BookOpen, ChevronLeft, ChevronRight, Check, Sparkles } from 'lucide-react';
import { siteConfig } from '../siteConfig';

interface LookInsideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBuyClick: () => void;
  initialChapterIndex?: number;
}

export const LookInsideModal: React.FC<LookInsideModalProps> = ({
  isOpen,
  onClose,
  onBuyClick,
  initialChapterIndex = 0,
}) => {
  const [currentIdx, setCurrentIdx] = useState(initialChapterIndex);

  if (!isOpen) return null;

  const currentChapter = siteConfig.lookInsideChapters[currentIdx];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % siteConfig.lookInsideChapters.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + siteConfig.lookInsideChapters.length) % siteConfig.lookInsideChapters.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF6EE] text-[#302D25] rounded-2xl shadow-2xl border border-[#A6AD8B]/40 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#A6AD8B]/20 bg-[#F7F1E5]">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#353D22]" />
            <span className="font-serif font-bold text-base text-[#353D22]">
              Look Inside: Chapter Preview ({currentIdx + 1} of {siteConfig.lookInsideChapters.length})
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-800 rounded-lg hover:bg-stone-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chapter tab strip */}
        <div className="flex border-b border-[#A6AD8B]/20 bg-[#F7F1E5]/70 px-4 gap-1 overflow-x-auto">
          {siteConfig.lookInsideChapters.map((chap, i) => (
            <button
              key={chap.id}
              onClick={() => setCurrentIdx(i)}
              className={`py-2 px-3 text-xs font-semibold whitespace-nowrap transition-colors border-b-2 ${
                currentIdx === i
                  ? 'border-[#353D22] text-[#353D22]'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              {chap.title}
            </button>
          ))}
        </div>

        {/* Content Area - Simulated Book Page */}
        <div className="p-6 overflow-y-auto space-y-5 bg-[#FAF6EE]">
          <div className="border border-[#A6AD8B]/30 rounded-xl p-5 sm:p-7 bg-[#F7F1E5] shadow-inner relative">
            {/* Watermark leaf or corner accent */}
            <div className="text-center pb-4 border-b border-[#A6AD8B]/20">
              <span className="text-[11px] uppercase tracking-widest text-stone-500 font-semibold">
                Margaret's Little Guide • Page Excerpt
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#353D22] mt-1">
                {currentChapter.title}
              </h3>
              <p className="text-xs text-[#57534E] italic mt-0.5">
                {currentChapter.subtitle}
              </p>
            </div>

            <div className="py-4 space-y-4">
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                "{currentChapter.description}"
              </p>

              {/* Sample excerpt box */}
              {currentChapter.sampleExcerpt && (
                <div className="p-4 bg-white/70 rounded-lg border border-[#A6AD8B]/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-sm text-[#353D22]">
                      {currentChapter.sampleExcerpt.recipeName}
                    </h4>
                    <span className="text-[11px] font-medium text-[#C06C46] bg-[#C06C46]/10 px-2 py-0.5 rounded">
                      {currentChapter.sampleExcerpt.prepTime}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wide">
                      What You'll Need:
                    </span>
                    <ul className="mt-1 space-y-1 text-xs text-stone-600">
                      {currentChapter.sampleExcerpt.ingredients.map((ing, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-[#4A582F] shrink-0" />
                          <span>{ing}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-stone-200/60">
                    <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wide">
                      Margaret's Gentle Method:
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed mt-1">
                      {currentChapter.sampleExcerpt.instructions}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-2 flex justify-between items-center text-[11px] text-stone-400 border-t border-[#A6AD8B]/20">
              <span>Section: {currentChapter.title}</span>
              <span>80-Page Complete Digital E-Book</span>
            </div>
          </div>
        </div>

        {/* Footer with pagination and instant purchase button */}
        <div className="px-6 py-3.5 border-t border-[#A6AD8B]/20 bg-[#F7F1E5] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-lg border border-[#A6AD8B]/40 hover:bg-stone-200/50 transition-colors text-stone-700"
              title="Previous Chapter"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-lg border border-[#A6AD8B]/40 hover:bg-stone-200/50 transition-colors text-stone-700"
              title="Next Chapter"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-stone-500 hidden sm:inline">
              Chapter {currentIdx + 1} of {siteConfig.lookInsideChapters.length}
            </span>
          </div>

          <button
            onClick={() => {
              onClose();
              onBuyClick();
            }}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#353D22] text-[#FAF6EE] text-xs font-semibold rounded-lg hover:bg-[#4A582F] transition-all shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C06C46]" />
            <span>Unlock Full 80-Page Guide (${siteConfig.SALE_PRICE.toFixed(2)})</span>
          </button>
        </div>
      </div>
    </div>
  );
};
