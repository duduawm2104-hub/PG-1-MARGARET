import React from 'react';
import { Lock, ArrowRight, BookOpen, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { PriceBlock } from './PriceBlock';

interface HeroProps {
  onBuyClick: () => void;
  onPreviewClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBuyClick, onPreviewClick }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-20 border-b border-[#A6AD8B]/25">
      {/* Background delicate parchment texture and soft botanical gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6EE] via-[#F7F1E5] to-[#EFE8D8]/50 pointer-events-none" />
      
      {/* Subtle organic botanical SVG background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8A9A5B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C06C46]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Sales Copy & Call to Action (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Social proof / category kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#4A582F]">
              <span className="flex items-center text-amber-600 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </span>
              <span className="text-stone-400">·</span>
              <span className="text-[#57534E]">Over 4,200 Homemakers & Families</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-[#302D25] leading-[1.15] text-balance">
              A Little More Comfort in Your Everyday Life.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl font-normal">
              {siteConfig.subtitle}
            </p>

            {/* Key Quick Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#44403C] w-full max-w-lg pt-1">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#4A582F] shrink-0" />
                <span>Instant 80-Page PDF Download</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#4A582F] shrink-0" />
                <span>3 Free Printable Gift Sheets Included</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#4A582F] shrink-0" />
                <span>No Complicated Kitchen Equipment</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#4A582F] shrink-0" />
                <span>Unconditional 30-Day Guarantee</span>
              </div>
            </div>

            {/* Central Price Block */}
            <div className="w-full pt-4 pb-2 flex flex-col items-center lg:items-start">
              <PriceBlock
                size="large"
                align="left"
                showLegend={true}
              />
            </div>

            {/* Primary Action Button (CTA) */}
            <div className="w-full flex flex-col items-center lg:items-start gap-3 pt-2">
              <button
                onClick={onBuyClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl sm:rounded-2xl bg-[#353D22] text-[#FAF6EE] text-sm sm:text-base font-bold tracking-wide uppercase hover:bg-[#4A582F] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span>GET MY GUIDE + 3 FREE GIFTS — ${siteConfig.SALE_PRICE.toFixed(2)}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust Seal */}
              <div className="flex items-center gap-2 text-xs text-[#57534E] font-medium pt-1">
                <Lock className="w-3.5 h-3.5 text-[#4A582F] shrink-0" />
                <span>Instant PDF delivery to your email • Secure checkout</span>
              </div>

              {/* Secondary Peek button */}
              <button
                onClick={onPreviewClick}
                className="inline-flex items-center gap-1.5 text-xs text-[#4A582F] hover:text-[#353D22] font-semibold underline underline-offset-4 mt-1 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Want to see what's inside first? Click for a free sample excerpt →</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3D E-Book Showcase (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Subtle glow background */}
            <div className="absolute inset-0 bg-[#A6AD8B]/15 rounded-full filter blur-2xl transform scale-90" />

            {/* 3D Realistic Book Container with micro-tilt interaction */}
            <div className="relative group cursor-pointer" onClick={onPreviewClick}>
              
              {/* Floating Free Bonuses Badge */}
              <div className="absolute -top-4 -right-2 sm:-right-4 z-20 bg-[#FAF6EE] border border-[#A6AD8B]/50 rounded-xl px-3.5 py-2 shadow-md flex items-center gap-2 transform rotate-2 group-hover:rotate-0 transition-transform">
                <Sparkles className="w-4 h-4 text-[#C06C46]" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-[#C06C46] tracking-wider">
                    Free Gift Bundle
                  </p>
                  <p className="text-xs font-semibold text-[#302D25]">
                    3 Printable Planners ($27 Value)
                  </p>
                </div>
              </div>

              {/* Realistic 3D Book wrapper with spine & page edges */}
              <div className="relative perspective-[1200px] transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="relative rounded-2xl overflow-hidden book-shadow border border-[#302D25]/15 bg-[#FAF6EE]">
                  
                  {/* The cover image from the brief */}
                  <img
                    src={siteConfig.BOOK_IMAGE_URL}
                    alt="Margaret's Little Guide to Everyday Wellness 3D E-book Cover"
                    referrerPolicy="no-referrer"
                    className="w-full max-w-[340px] sm:max-w-[380px] h-auto object-cover block select-none"
                  />

                  {/* Gentle sheen reflection across the book cover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Interactive "Click to Peek Inside" Pill below book */}
              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF6EE] text-[#353D22] text-xs font-semibold rounded-full border border-[#A6AD8B]/40 shadow-sm group-hover:bg-[#353D22] group-hover:text-[#FAF6EE] transition-colors">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Click to Look Inside the Pages</span>
                </span>
              </div>
            </div>

            {/* Quick Format Badges */}
            <div className="mt-3 flex items-center gap-3 text-[11px] text-[#57534E]">
              <span>Universal PDF Format</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>80 Full-Color Pages</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Printable at Home</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
