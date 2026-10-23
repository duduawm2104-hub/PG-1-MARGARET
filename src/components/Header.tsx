import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../siteConfig';

interface HeaderProps {
  onBuyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBuyClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#A6AD8B]/30 transition-all">
      {/* Announcement Strip */}
      <div className="bg-[#353D22] text-[#FAF6EE] text-[11px] sm:text-xs font-medium py-1.5 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <span role="img" aria-label="sprout">🌿</span>
        <span>
          Limited Time Offer: Save {siteConfig.DISCOUNT_PERCENT}% + Get 3 Free Printable Gifts
        </span>
      </div>

      {/* Top Bar: Strict 3-zone contract */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single text element) */}
        <a
          href="#"
          className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#353D22] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
        >
          Margaret's Little Guides
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[#57534E]">
          <a
            href="#look-inside"
            className="hover:text-[#353D22] transition-colors whitespace-nowrap shrink-0"
          >
            Look Inside
          </a>
          <a
            href="#free-gifts"
            className="hover:text-[#353D22] transition-colors whitespace-nowrap shrink-0"
          >
            3 Free Gifts
          </a>
          <a
            href="#meet-margaret"
            className="hover:text-[#353D22] transition-colors whitespace-nowrap shrink-0"
          >
            Meet Margaret
          </a>
          <a
            href="#faq"
            className="hover:text-[#353D22] transition-colors whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 primary CTA button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onBuyClick}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#FAF6EE] bg-[#353D22] hover:bg-[#4A582F] rounded-lg transition-all shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
          >
            <span>Get Guide (${siteConfig.SALE_PRICE.toFixed(2)})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
