import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../siteConfig';

interface StickyBottomBarProps {
  onBuyClick: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onBuyClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past hero (e.g. 450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Quick Purchase Floating Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF6EE]/95 backdrop-blur-md border-t border-[#A6AD8B]/40 px-3 py-2 shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom"
      style={{ maxHeight: '14vh' }} // Strictly less than 15% mobile viewport height
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        {/* Left: Price comparison with central strikethrough cut line */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold text-[#C06C46] uppercase tracking-wide flex items-center gap-0.5">
              <Sparkles className="w-2.5 h-2.5" /> 50% OFF
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            {/* Centered strikethrough line */}
            <div className="relative inline-flex items-center select-none">
              <span className="font-serif text-sm text-[#78716C] tabular-nums">
                ${siteConfig.REGULAR_PRICE.toFixed(2)}
              </span>
              <span
                className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-[#78716C] rounded-full pointer-events-none"
                aria-hidden="true"
              />
            </div>

            <span className="font-serif font-bold text-xl text-[#353D22] tabular-nums">
              ${siteConfig.SALE_PRICE.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Right: Compact Action Button */}
        <button
          onClick={onBuyClick}
          className="flex-1 max-w-[210px] py-2.5 px-3.5 bg-[#353D22] text-[#FAF6EE] text-xs font-bold uppercase tracking-wider rounded-xl shadow hover:bg-[#4A582F] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>Get Guide (${siteConfig.SALE_PRICE.toFixed(2)})</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
