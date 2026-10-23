import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../siteConfig';

interface PriceBlockProps {
  size?: 'normal' | 'large';
  align?: 'center' | 'left';
  showLegend?: boolean;
}

export const PriceBlock: React.FC<PriceBlockProps> = ({
  size = 'normal',
  align = 'center',
  showLegend = true,
}) => {
  const isLarge = size === 'large';
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignClass} gap-2`}>
      {/* Discount badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-[#C06C46]/10 text-[#C06C46] border border-[#C06C46]/25 uppercase">
        <Sparkles className="w-3.5 h-3.5 text-[#C06C46]" />
        <span>Save ${siteConfig.SAVINGS_AMOUNT.toFixed(2)} • {siteConfig.DISCOUNT_PERCENT}% OFF</span>
      </div>

      {/* Price comparison line */}
      <div className="flex items-center gap-4 flex-wrap justify-center">
        {/* Reference regular price with centered horizontal cut line */}
        <div className="relative inline-flex items-center select-none">
          <span
            className={`font-serif text-[#78716C] tracking-tight tabular-nums ${
              isLarge ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
            } opacity-85`}
          >
            ${siteConfig.REGULAR_PRICE.toFixed(2)}
          </span>
          {/* Centered horizontal strike-through line (cutting exactly across the middle of the numerals) */}
          <span
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2.5px] bg-[#78716C] rounded-full pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Promotional active price */}
        <div className="flex items-baseline gap-1">
          <span
            className={`font-serif font-bold text-[#353D22] tracking-tight tabular-nums ${
              isLarge ? 'text-5xl sm:text-6xl' : 'text-4xl sm:text-5xl'
            }`}
          >
            ${siteConfig.SALE_PRICE.toFixed(2)}
          </span>
          <span className="text-xs uppercase font-medium text-[#57534E] tracking-wider ml-1">
            USD
          </span>
        </div>
      </div>

      {/* Trust Legend */}
      {showLegend && (
        <p className="text-xs sm:text-sm text-[#57534E] font-medium tracking-tight mt-1 flex items-center gap-1.5 flex-wrap justify-center">
          <ShieldCheck className="w-4 h-4 text-[#4A582F] shrink-0" />
          <span>One-Time Payment</span>
          <span aria-hidden="true" className="text-stone-400">·</span>
          <span>Instant Digital PDF Download</span>
          <span aria-hidden="true" className="text-stone-400">·</span>
          <span>30-Day Guarantee</span>
        </p>
      )}
    </div>
  );
};
