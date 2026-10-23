import React from 'react';
import { ArrowRight, ShieldCheck, Lock, CheckCircle2, Sparkles } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { PriceBlock } from './PriceBlock';

interface FinalCtaProps {
  onBuyClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onBuyClick }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF6EE] to-[#EFE8D8] border-b border-[#A6AD8B]/30 relative overflow-hidden">
      
      {/* Decorative botanical background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A6AD8B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Guarantee Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6EE] text-[#353D22] border border-[#A6AD8B]/40 shadow-sm text-xs font-semibold mb-6">
          <ShieldCheck className="w-4 h-4 text-[#4A582F]" />
          <span>30-Day 100% Happiness Guarantee</span>
        </div>

        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#302D25] text-balance">
          Bring Warmth & Simplicity Home Today
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#57534E] max-w-xl mx-auto mt-4 leading-relaxed">
          Download Margaret's complete 80-page digital guide immediately, plus keep all 3 printable gifts ($27 value) at no extra charge.
        </p>

        {/* Value Box */}
        <div className="my-8 max-w-xl mx-auto bg-[#F7F1E5] rounded-2xl border border-[#A6AD8B]/40 p-6 sm:p-8 shadow-md">
          <div className="flex items-center justify-between pb-4 border-b border-[#A6AD8B]/20 text-xs text-stone-600">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#4A582F]" />
              Margaret's Little Guide (80-Page E-book)
            </span>
            <span className="text-stone-400 font-mono">$19.99</span>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-[#A6AD8B]/20 text-xs text-stone-600">
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles className="w-4 h-4 text-[#C06C46]" />
              3 Free Printable Gifts (Meal Planner, Grocery, Habits)
            </span>
            <span className="text-[#C06C46] font-bold uppercase text-[11px] bg-[#C06C46]/10 px-2 py-0.5 rounded">
              FREE ($27 Value)
            </span>
          </div>

          {/* Central Price Block */}
          <div className="pt-6 pb-2">
            <PriceBlock size="large" align="center" showLegend={true} />
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <button
              onClick={onBuyClick}
              className="w-full flex items-center justify-center gap-3 py-4 px-8 rounded-xl sm:rounded-2xl bg-[#353D22] text-[#FAF6EE] text-sm sm:text-base font-bold tracking-wide uppercase hover:bg-[#4A582F] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
            >
              <span>YES, SEND ME MARGARET'S GUIDE NOW →</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-[#57534E] pt-4 font-medium">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-stone-400" />
              Secure 256-bit checkout
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Instant PDF delivery</span>
          </div>
        </div>

        {/* Closing gentle statement */}
        <p className="text-xs text-stone-500 italic max-w-md mx-auto">
          "Take your time, sip your tea, and enjoy each little chapter whenever you need a peaceful breath."
        </p>

      </div>
    </section>
  );
};
