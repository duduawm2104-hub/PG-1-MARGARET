import React, { useState } from 'react';
import { X, ShieldCheck, FileText, Lock } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'terms' | 'privacy' | 'refund';
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'terms',
}) => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy' | 'refund'>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF6EE] text-[#302D25] rounded-2xl shadow-2xl border border-[#A6AD8B]/40 overflow-hidden max-h-[88vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#A6AD8B]/20 bg-[#F7F1E5]">
          <h3 className="font-serif font-bold text-lg text-[#353D22]">
            Legal & Customer Protections
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-800 rounded-lg hover:bg-stone-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[#A6AD8B]/20 bg-[#F7F1E5]/60 px-6 gap-2 pt-2">
          <button
            onClick={() => setActiveTab('refund')}
            className={`pb-2.5 px-3 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition-colors ${
              activeTab === 'refund'
                ? 'border-[#353D22] text-[#353D22]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-[#4A582F]" />
            30-Day Refund Policy
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`pb-2.5 px-3 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition-colors ${
              activeTab === 'terms'
                ? 'border-[#353D22] text-[#353D22]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <FileText className="w-4 h-4 text-stone-500" />
            Terms of Use
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-2.5 px-3 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition-colors ${
              activeTab === 'privacy'
                ? 'border-[#353D22] text-[#353D22]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <Lock className="w-4 h-4 text-stone-500" />
            Privacy Policy
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
          {activeTab === 'refund' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#EFE8D8]/60 rounded-xl border border-[#A6AD8B]/30">
                <h4 className="font-serif font-bold text-base text-[#353D22] mb-1">
                  Our Unconditional 30-Day "Peace of Mind" Guarantee
                </h4>
                <p>
                  We want you to feel complete serenity with your purchase. Take a full 30 days to browse through Margaret's recipes, brew the teas, try the mindful routines, and print out your checklists.
                </p>
              </div>
              <h5 className="font-bold text-stone-800 pt-1">How Refunds Work</h5>
              <p>
                If for any reason you do not feel inspired or comforted by this guide, simply send an email to <strong className="text-stone-800">help@margaretsguides.com</strong> with your order email or receipt.
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>No complicated questionnaires or phone calls required.</li>
                <li>Full 100% refund processed within 24 to 48 hours directly back to your original payment method.</li>
                <li>You may keep the PDF handbook and all 3 printable gifts as our heartfelt gift.</li>
              </ul>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-base text-[#353D22]">
                Terms of Use & License
              </h4>
              <p>
                By purchasing or downloading <em>"Margaret's Little Guide to Everyday Wellness"</em>, you are granted a non-exclusive, non-transferable personal license to view, store, and print copies of the digital book and its accompanying printable materials for personal and household use.
              </p>
              <h5 className="font-bold text-stone-800">Permitted Use</h5>
              <p>
                You may print copies for yourself and members of your household, download the PDF onto your personal phones, computers, and tablets, and laminate the printable trackers for kitchen use.
              </p>
              <h5 className="font-bold text-stone-800">Commercial Restrictions</h5>
              <p>
                Re-selling, sublicensing, mass redistributing, or re-publishing the texts, recipes, or artwork without prior written consent from Margaret's Little Guides is strictly prohibited.
              </p>
              <h5 className="font-bold text-stone-800">Wellness Disclaimer</h5>
              <p>
                The herbal wisdom and lifestyle routines in this publication reflect traditional domestic home-keeping and culinary traditions. They are provided for informational and educational purposes and do not replace personalized medical advice from a qualified healthcare practitioner.
              </p>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-base text-[#353D22]">
                Privacy & Data Security
              </h4>
              <p>
                We honor your privacy and believe in quiet, respectful stewardship of your personal information.
              </p>
              <h5 className="font-bold text-stone-800">Information We Collect</h5>
              <p>
                When you purchase the guide, we collect your name and email address solely to deliver your digital download link and receipts. We never sell, rent, or lease your email address to third parties or marketing brokers.
              </p>
              <h5 className="font-bold text-stone-800">Payment Security</h5>
              <p>
                All payment processing is handled through Stripe's certified PCI-DSS Level 1 secure payment infrastructure. Your credit card number and banking details never touch our servers.
              </p>
              <h5 className="font-bold text-stone-800">Contact & Removal</h5>
              <p>
                To request deletion of your purchase record or update your contact details, simply contact us at <strong className="text-stone-800">privacy@margaretsguides.com</strong>.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#A6AD8B]/20 bg-[#F7F1E5] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#353D22] text-[#FAF6EE] text-xs font-semibold rounded-lg hover:bg-[#4A582F] transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
