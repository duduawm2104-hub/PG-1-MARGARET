import React, { useState } from 'react';
import {
  X,
  Lock,
  CheckCircle2,
  Download,
  ExternalLink,
  ShieldCheck,
  Settings,
  Sparkles,
  Mail,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { siteConfig } from '../siteConfig';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  stripeLink: string;
  onSaveStripeLink: (link: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  stripeLink,
  onSaveStripeLink,
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showConfigTab, setShowConfigTab] = useState(false);
  const [customLinkInput, setCustomLinkInput] = useState(stripeLink || siteConfig.STRIPE_PAYMENT_LINK);
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isOpen) return null;

  const handleStripeRedirect = () => {
    if (stripeLink && stripeLink.trim().length > 0) {
      window.open(stripeLink.trim(), '_blank', 'noopener,noreferrer');
      onClose();
    }
  };

  const handleSimulatedCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsCompleted(true);
    }, 1200);
  };

  const handleSaveLink = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveStripeLink(customLinkInput.trim());
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FAF6EE] text-[#302D25] rounded-2xl shadow-2xl border border-[#A6AD8B]/40 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#A6AD8B]/20 bg-[#F7F1E5]">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-lg text-[#353D22]">
              {isCompleted ? 'Order Confirmed!' : 'Secure Digital Order'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowConfigTab(!showConfigTab)}
              title="Stripe Link Settings"
              className="p-1.5 text-stone-500 hover:text-stone-800 rounded-lg hover:bg-stone-200/50 transition-colors"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-800 rounded-lg hover:bg-stone-200/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Owner configuration toggle for Stripe Payment Link */}
          {showConfigTab && (
            <div className="p-4 bg-white/80 rounded-xl border border-[#A6AD8B]/30 text-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#353D22] flex items-center gap-1.5">
                  <Settings className="w-3.5 h-3.5" />
                  Stripe Payment Link Setup
                </span>
                <span className="text-stone-500">Live or Test mode</span>
              </div>
              <p className="text-stone-600">
                Paste your direct Stripe Payment Link (e.g. <code className="bg-stone-100 px-1 py-0.5 rounded">https://buy.stripe.com/...</code>). When set, the button will redirect your customers straight to Stripe.
              </p>
              <form onSubmit={handleSaveLink} className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://buy.stripe.com/..."
                  value={customLinkInput}
                  onChange={(e) => setCustomLinkInput(e.target.value)}
                  className="flex-1 px-3 py-1.5 rounded-lg border border-stone-300 text-xs focus:outline-none focus:ring-1 focus:ring-[#353D22]"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-[#353D22] text-[#FAF6EE] rounded-lg font-medium hover:bg-[#4A582F] transition-colors"
                >
                  Save Link
                </button>
              </form>
              {saveSuccess && (
                <p className="text-emerald-700 font-medium">Payment Link saved successfully!</p>
              )}
            </div>
          )}

          {isCompleted ? (
            /* Order success state */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#353D22]/10 rounded-full flex items-center justify-center mx-auto text-[#353D22]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#353D22]">
                Welcome to Margaret's Hearth
              </h3>
              <p className="text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                A confirmation with your lifetime access link was sent to <strong className="text-stone-800">{email}</strong>. You can also download your bundle directly right now:
              </p>

              <div className="p-4 bg-white/70 rounded-xl border border-[#A6AD8B]/30 text-left space-y-2 mt-4">
                <div className="flex items-center justify-between text-xs font-semibold text-stone-700">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#353D22]" />
                    Margaret's Little Guide (80 Pages PDF)
                  </span>
                  <a
                    href="#download-guide"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Simulated download: Margaret_Everyday_Wellness_Guide.pdf is ready!');
                    }}
                    className="inline-flex items-center gap-1 text-[#353D22] hover:underline font-bold"
                  >
                    <Download className="w-3.5 h-3.5" /> Download
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs text-stone-600 pt-2 border-t border-stone-100">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C06C46]" />
                    All 3 Printable Gifts (Meal Planner, Grocery List, Habits)
                  </span>
                  <a
                    href="#download-bonuses"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Simulated download: 3_Free_Printable_Gifts_Bundle.zip is ready!');
                    }}
                    className="inline-flex items-center gap-1 text-[#353D22] hover:underline font-bold"
                  >
                    <Download className="w-3.5 h-3.5" /> Download
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#353D22] text-[#FAF6EE] text-sm font-semibold rounded-xl hover:bg-[#4A582F] transition-all"
                >
                  Return to Guide
                </button>
              </div>
            </div>
          ) : (
            /* Order Summary and Purchase Options */
            <>
              {/* Product Card Summary */}
              <div className="flex gap-4 p-3.5 bg-white/70 rounded-xl border border-[#A6AD8B]/30 items-center">
                <img
                  src={siteConfig.BOOK_IMAGE_URL}
                  alt="Margaret's Little Guide E-book"
                  referrerPolicy="no-referrer"
                  className="w-16 h-20 object-cover rounded shadow-sm shrink-0 border border-stone-200"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif font-bold text-sm text-[#353D22] truncate">
                    Margaret's Little Guide to Everyday Wellness
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Complete 80-page digital e-book + 3 Free Printable Gifts
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-xs text-stone-400 line-through">
                      ${siteConfig.REGULAR_PRICE.toFixed(2)}
                    </span>
                    <span className="font-serif font-bold text-base text-[#353D22]">
                      ${siteConfig.SALE_PRICE.toFixed(2)}
                    </span>
                    <span className="text-[10px] font-semibold bg-[#C06C46]/10 text-[#C06C46] px-1.5 py-0.5 rounded">
                      50% OFF
                    </span>
                  </div>
                </div>
              </div>

              {/* Free Bonuses Included Reminder */}
              <div className="bg-[#EFE8D8]/50 p-3 rounded-lg border border-[#A6AD8B]/20 text-xs space-y-1.5">
                <p className="font-semibold text-[#353D22] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C06C46]" />
                  Included at no extra charge ($27 value):
                </p>
                <ul className="text-stone-600 pl-4 list-disc space-y-0.5">
                  <li>Weekly Meal Planner (Printable A4 / US Letter)</li>
                  <li>Reusable Cottage Grocery & Pantry Checklist</li>
                  <li>Daily Mindful Routine & Habit Tracker</li>
                </ul>
              </div>

              {/* Direct Stripe button if link is present */}
              {stripeLink && stripeLink.trim().length > 0 ? (
                <div className="space-y-3 pt-2">
                  <button
                    onClick={handleStripeRedirect}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#353D22] text-[#FAF6EE] font-semibold text-sm hover:bg-[#4A582F] transition-all shadow-md active:scale-[0.99]"
                  >
                    <span>Proceed to Stripe Checkout — ${siteConfig.SALE_PRICE.toFixed(2)}</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[11px] text-stone-500">
                    Encrypted 256-bit SSL transaction via Stripe.
                  </p>
                </div>
              ) : (
                /* Instant simulated delivery demo for immediate testing */
                <form onSubmit={handleSimulatedCheckout} className="space-y-4 pt-1">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Your Email (for instant digital PDF delivery):
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="youremail@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-white text-stone-800 rounded-xl border border-[#A6AD8B]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#353D22] shadow-sm"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#353D22] text-[#FAF6EE] font-semibold text-sm hover:bg-[#4A582F] transition-all shadow-md active:scale-[0.99] disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Processing Secure Order...
                      </span>
                    ) : (
                      <>
                        <span>GET INSTANT ACCESS — ${siteConfig.SALE_PRICE.toFixed(2)}</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-stone-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-stone-400" />
                      Secure 256-bit checkout
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#4A582F]" />
                      30-Day Money Back Guarantee
                    </span>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
