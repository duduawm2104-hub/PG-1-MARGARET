import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { siteConfig } from '../siteConfig';

export const MeetMargaret: React.FC = () => {
  return (
    <section id="meet-margaret" className="py-16 sm:py-24 bg-[#FAF6EE] border-b border-[#A6AD8B]/25">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="bg-[#F7F1E5] rounded-3xl border border-[#A6AD8B]/40 p-8 sm:p-12 shadow-sm relative overflow-hidden">
          
          {/* Subtle botanical background aura */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#A6AD8B]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Author Portrait (5 cols) */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative">
                {/* Vintage styled frame */}
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-4 border-[#FAF6EE] shadow-xl rotate-1 group hover:rotate-0 transition-transform">
                  <img
                    src={siteConfig.AUTHOR_IMAGE}
                    alt="Margaret in her cottage herb garden"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative sticker badge */}
                <div className="absolute -bottom-3 -right-2 bg-[#FAF6EE] border border-[#A6AD8B]/40 px-3 py-1.5 rounded-full shadow flex items-center gap-1.5 text-xs text-[#353D22] font-semibold -rotate-2">
                  <Heart className="w-3.5 h-3.5 text-[#C06C46] fill-[#C06C46]" />
                  <span>Cottage Homekeeper</span>
                </div>
              </div>

              <p className="text-xs text-[#57534E] text-center mt-4 italic">
                Margaret gathering fresh lavender and chamomile in her garden.
              </p>
            </div>

            {/* Author Story & Handwritten Signature (7 cols) */}
            <div className="md:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#4A582F]">
                <Sparkles className="w-3.5 h-3.5 text-[#C06C46]" />
                <span>Meet Margaret</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#302D25] leading-tight">
                "I wrote this little handbook because life got too noisy."
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  For over forty years, my kitchen has been the quiet heartbeat of our family — a place where simple vegetable broths simmer on the stove, dried herbs hang from the rafters, and busy days are softened with warm cups of tea.
                </p>
                <p>
                  I wrote <em>Margaret's Little Guide</em> with deep care for anyone feeling overwhelmed by modern hustle, rigid wellness trends, and complicated routines. My wish is that these humble recipes and peaceful habits bring a quiet, steady warmth to your home every single morning and night.
                </p>
              </div>

              {/* Handwritten Note & Signature */}
              <div className="pt-4 border-t border-[#A6AD8B]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="font-serif font-semibold text-xs text-[#57534E] uppercase tracking-wider">
                    Author & Herbal Enthusiast
                  </p>
                  <p className="font-handwriting text-3xl sm:text-4xl text-[#353D22] font-bold tracking-wide mt-1">
                    Warmly, Margaret
                  </p>
                </div>

                <div className="p-3 bg-[#FAF6EE] rounded-xl border border-[#A6AD8B]/25 text-[11px] text-[#57534E] max-w-xs">
                  <span className="font-bold text-[#353D22]">A gentle promise:</span> No gadgets, no pretension — just practical everyday comfort.
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
