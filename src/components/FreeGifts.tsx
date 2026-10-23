import React from 'react';
import { Gift, Calendar, CheckSquare, Sparkles, Printer, Check } from 'lucide-react';
import { siteConfig } from '../siteConfig';

interface FreeGiftsProps {
  onBuyClick: () => void;
}

export const FreeGifts: React.FC<FreeGiftsProps> = ({ onBuyClick }) => {
  return (
    <section id="free-gifts" className="py-16 sm:py-24 bg-[#F7F1E5] border-b border-[#A6AD8B]/25">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-[#C06C46]/10 text-[#C06C46] border border-[#C06C46]/25 uppercase">
            <Gift className="w-3.5 h-3.5" />
            <span>Complimentary Bonus Bundle ($27 Value)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#302D25] text-balance">
            Your Guide Comes With 3 Lovely Little Gifts!
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
            Practical printables to make everyday life a little easier. Designed with high-resolution vector precision so you can print them at home again and again.
          </p>
        </div>

        {/* 3 Printable Sheet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.bonuses.map((bonus, index) => {
            return (
              <div
                key={bonus.id}
                className="relative flex flex-col bg-[#FAF6EE] rounded-2xl border border-[#A6AD8B]/40 p-6 shadow-md card-hover group"
              >
                {/* Free Badge */}
                <div className="absolute -top-3 right-6 bg-[#C06C46] text-[#FAF6EE] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  {bonus.badge}
                </div>

                {/* Printable Paper Mockup Simulation */}
                <div className="w-full aspect-[4/5] bg-white rounded-xl border border-stone-200 p-4 shadow-inner flex flex-col justify-between relative overflow-hidden mb-5">
                  
                  {/* Subtle top binder or hole punches */}
                  <div className="flex justify-center gap-3 pb-2 border-b border-stone-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-stone-200" />
                    <span className="w-2.5 h-2.5 rounded-full bg-stone-200" />
                    <span className="w-2.5 h-2.5 rounded-full bg-stone-200" />
                  </div>

                  {/* Header inside simulated sheet */}
                  <div className="text-center py-2">
                    <span className="text-[9px] uppercase tracking-widest text-[#4A582F] font-bold block">
                      Margaret's Printables • {bonus.number}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-[#353D22] leading-tight mt-0.5">
                      {bonus.title.replace("Margaret's ", "")}
                    </h4>
                  </div>

                  {/* Body preview of paper layout depending on gift */}
                  {index === 0 && (
                    /* Weekly Meal Planner layout */
                    <div className="space-y-1.5 py-1 text-[10px] text-stone-500">
                      <div className="grid grid-cols-4 gap-1 text-[9px] font-semibold text-stone-600 bg-stone-50 p-1 rounded">
                        <span>Mon: Soup</span>
                        <span>Tue: Loaf</span>
                        <span>Wed: Stew</span>
                        <span>Thu: Herb</span>
                      </div>
                      <div className="border border-dashed border-stone-200 p-1.5 rounded space-y-1">
                        <div className="flex justify-between text-[9px] font-medium text-stone-600">
                          <span>Seasonal Soup Batch</span>
                          <span>Oats & Teas</span>
                        </div>
                        <div className="h-1 bg-stone-100 rounded w-3/4" />
                        <div className="h-1 bg-stone-100 rounded w-1/2" />
                      </div>
                      <div className="flex items-center gap-1 text-[9px] text-[#4A582F]">
                        <Calendar className="w-3 h-3" />
                        <span>Ready to print 8.5" x 11" & A4</span>
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    /* Grocery Checklist layout */
                    <div className="space-y-1 py-1 text-[10px] text-stone-500">
                      <div className="flex justify-between items-center text-[9px] font-bold text-stone-700 bg-stone-50 px-1.5 py-0.5 rounded">
                        <span>Farm Greens</span>
                        <span>Pantry Roots</span>
                      </div>
                      <div className="space-y-1 px-1">
                        <div className="flex items-center gap-1.5 text-[9px]">
                          <span className="w-2.5 h-2.5 border border-stone-300 rounded-sm inline-block" />
                          <span>Fresh thyme, sage & rosemary</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[9px]">
                          <span className="w-2.5 h-2.5 border border-stone-300 rounded-sm inline-block" />
                          <span>Rolled organic oats & honey</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[9px]">
                          <span className="w-2.5 h-2.5 border border-stone-300 rounded-sm inline-block" />
                          <span>Root vegetables & dried beans</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    /* Daily Habits layout */
                    <div className="space-y-1.5 py-1 text-[10px] text-stone-500">
                      <div className="grid grid-cols-7 gap-0.5 text-center text-[8px] font-bold text-stone-600">
                        <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                      </div>
                      <div className="flex items-center justify-between text-[9px] border-b border-stone-100 pb-1">
                        <span>Morning Chamomile</span>
                        <span className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="w-2 h-2 rounded-full bg-[#8A9A5B]/40 inline-block" />
                          ))}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[9px] border-b border-stone-100 pb-1">
                        <span>30-min Garden Walk</span>
                        <span className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="w-2 h-2 rounded-full bg-[#8A9A5B]/40 inline-block" />
                          ))}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Printable Sheet Bottom Seal */}
                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[9px] text-stone-400">
                    <span className="flex items-center gap-1">
                      <Printer className="w-3 h-3 text-stone-400" /> Instant PDF Printable
                    </span>
                    <span className="font-semibold text-[#4A582F]">Lifetime License</span>
                  </div>
                </div>

                {/* Card Title & Content */}
                <div className="space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-[#4A582F] uppercase tracking-wider">
                      {bonus.number}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#302D25] mt-0.5">
                      {bonus.title}
                    </h3>
                    <p className="text-xs text-[#57534E] italic mb-2">
                      {bonus.subtitle}
                    </p>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>

                  {/* Features list */}
                  <div className="pt-4 border-t border-[#A6AD8B]/20 space-y-1.5">
                    {bonus.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-[#4A582F] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bonus bundle banner */}
        <div className="mt-12 p-6 sm:p-8 bg-[#EFE8D8] rounded-2xl border border-[#A6AD8B]/35 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#353D22] text-[#FAF6EE] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#C06C46]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-lg text-[#302D25]">
                Total Free Gift Value: $27.00
              </h4>
              <p className="text-xs sm:text-sm text-[#57534E]">
                Included automatically when you order Margaret's Little Guide today for just ${siteConfig.SALE_PRICE.toFixed(2)}.
              </p>
            </div>
          </div>

          <button
            onClick={onBuyClick}
            className="px-6 py-3 bg-[#353D22] text-[#FAF6EE] text-xs font-bold rounded-xl hover:bg-[#4A582F] transition-all shrink-0 shadow-md uppercase tracking-wider whitespace-nowrap"
          >
            Claim All 3 Gifts Free →
          </button>
        </div>

      </div>
    </section>
  );
};
