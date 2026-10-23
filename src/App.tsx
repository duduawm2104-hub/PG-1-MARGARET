import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LookInside } from './components/LookInside';
import { FreeGifts } from './components/FreeGifts';
import { MeetMargaret } from './components/MeetMargaret';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { CheckoutModal } from './components/CheckoutModal';
import { LookInsideModal } from './components/LookInsideModal';
import { LegalModal } from './components/LegalModal';
import { siteConfig } from './siteConfig';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isLookInsideOpen, setIsLookInsideOpen] = useState(false);
  const [lookInsideChapterIdx, setLookInsideChapterIdx] = useState(0);
  const [legalModalTab, setLegalModalTab] = useState<'terms' | 'privacy' | 'refund' | null>(null);
  
  // Persist customized Stripe Payment Link in localStorage if user edits it
  const [stripeLink, setStripeLink] = useState(() => {
    return localStorage.getItem('margaret_stripe_payment_link') || siteConfig.STRIPE_PAYMENT_LINK;
  });

  const handleSaveStripeLink = (newLink: string) => {
    setStripeLink(newLink);
    localStorage.setItem('margaret_stripe_payment_link', newLink);
  };

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleOpenPreview = (chapterIdx = 0) => {
    setLookInsideChapterIdx(chapterIdx);
    setIsLookInsideOpen(true);
  };

  const handleOpenLegal = (tab: 'terms' | 'privacy' | 'refund') => {
    setLegalModalTab(tab);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E5] text-[#302D25] selection:bg-[#353D22] selection:text-[#FAF6EE] flex flex-col font-sans">
      {/* 1. Header with announcement banner and 3-zone contract */}
      <Header onBuyClick={handleOpenCheckout} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section (First Fold Impact) */}
        <Hero
          onBuyClick={handleOpenCheckout}
          onPreviewClick={() => handleOpenPreview(0)}
        />

        {/* 3. Look Inside Gallery */}
        <LookInside onOpenPreview={handleOpenPreview} />

        {/* 4. 3 Free Printable Gifts */}
        <FreeGifts onBuyClick={handleOpenCheckout} />

        {/* 5. Meet Margaret (Author Bio & Story) */}
        <MeetMargaret />

        {/* 6. FAQ (3 Essential Questions Accordion) */}
        <FaqSection onOpenRefundPolicy={() => handleOpenLegal('refund')} />

        {/* 7. Final Closing Offer Block */}
        <FinalCta onBuyClick={handleOpenCheckout} />
      </main>

      {/* 8. Minimalist Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* 9. Mobile Sticky Bottom Bar (Visible on < 768px past hero) */}
      <StickyBottomBar onBuyClick={handleOpenCheckout} />

      {/* Modals */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        stripeLink={stripeLink}
        onSaveStripeLink={handleSaveStripeLink}
      />

      <LookInsideModal
        isOpen={isLookInsideOpen}
        onClose={() => setIsLookInsideOpen(false)}
        onBuyClick={() => {
          setIsLookInsideOpen(false);
          setIsCheckoutOpen(true);
        }}
        initialChapterIndex={lookInsideChapterIdx}
      />

      <LegalModal
        isOpen={legalModalTab !== null}
        onClose={() => setLegalModalTab(null)}
        initialTab={legalModalTab || 'terms'}
      />
    </div>
  );
}
