import React from 'react';
import { ShieldCheck, Heart, Lock } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (tab: 'terms' | 'privacy' | 'refund') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-[#FAF6EE] text-[#57534E] py-12 border-t border-[#A6AD8B]/30 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand & Mission */}
          <div className="space-y-1.5 max-w-sm">
            <h3 className="font-serif font-bold text-base text-[#353D22]">
              Margaret's Little Guides
            </h3>
            <p className="text-stone-500 text-xs leading-relaxed">
              Timeless domestic wisdom, wholesome recipes, and peaceful rituals crafted with heartfelt love for everyday homes.
            </p>
          </div>

          {/* Quick Legal Modals Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center font-medium">
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#353D22] hover:underline transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#353D22] hover:underline transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <button
              onClick={() => onOpenLegal('refund')}
              className="hover:text-[#353D22] hover:underline transition-colors cursor-pointer flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#4A582F]" />
              30-Day Refund Policy
            </button>
          </div>
        </div>

        {/* Security & Trust line */}
        <div className="pt-6 border-t border-[#A6AD8B]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-stone-500">
              <Lock className="w-3 h-3" /> 256-Bit SSL Encrypted Checkout
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 text-stone-500">
              <Heart className="w-3 h-3 text-[#C06C46]" /> Made with care
            </span>
          </div>

          <p className="text-center sm:text-right">
            © 2025 Margaret's Little Guides. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
