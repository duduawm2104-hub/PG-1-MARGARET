import React from 'react';
import { BookOpen, Sparkles, Utensils, Flower2, Sun, Eye } from 'lucide-react';
import { siteConfig } from '../siteConfig';

interface LookInsideProps {
  onOpenPreview: (chapterIndex: number) => void;
}

export const LookInside: React.FC<LookInsideProps> = ({ onOpenPreview }) => {
  const chapterDetails = [
    {
      index: 0,
      title: "Hearty Homemade Recipes",
      subtitle: "Sopas, chás e pães reconfortantes",
      pageCount: "28 Pages",
      icon: Utensils,
      image: siteConfig.RECIPES_IMAGE,
      tag: "Part I • Wholesome Kitchen",
      summary: "Comforting, slow-crafted nourishment using affordable everyday pantry staples. Nourishing vegetable broths, no-knead rosemary loaves, and restorative infusions that warm the soul on chilly evenings.",
      highlight: "Includes the famous Golden Chamomile Stewed Oats and Slow-Simmered Autumn Herb Soup."
    },
    {
      index: 1,
      title: "Gentle Herbal Remedies",
      subtitle: "Tônicos naturais e infusões para o dia a dia",
      pageCount: "24 Pages",
      icon: Flower2,
      image: siteConfig.HERBS_IMAGE,
      tag: "Part II • Everyday Apothecary",
      summary: "Safe, accessible folk wisdom simplified for modern homes. Learn gentle steeping times, how to store garden herbs, and brew soothing teas for restorative sleep, calmer digestion, and season-change immunity.",
      highlight: "Includes Margaret's Bedtime Restorative Infusion and Gentle Sore Throat Honey Elixir."
    },
    {
      index: 2,
      title: "Mindful Home Routines",
      subtitle: "Pequenos rituais para desacelerar",
      pageCount: "28 Pages",
      icon: Sun,
      image: siteConfig.ROUTINES_IMAGE,
      tag: "Part III • Cozy Sanctuary",
      summary: "Practical rhythms to ground your home without rigid schedules. Peaceful morning anchor moments, evening candlelit transitions, clutter-free pantry rituals, and simple methods to quiet busy thoughts.",
      highlight: "Includes the 15-Minute Cottage Morning Anchor and Screen-Free Twilight Wind-Down."
    }
  ];

  return (
    <section id="look-inside" className="py-16 sm:py-24 bg-[#FAF6EE] border-b border-[#A6AD8B]/25">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#4A582F]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Look Inside The 80-Page Guide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#302D25] text-balance">
            A Peek into the Cozy Wisdom Waiting Inside
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
            Written like a loving handwritten journal from a wise friend, filled with hand-tested guidance that makes your home feel like a warm sanctuary.
          </p>
        </div>

        {/* 3-Column Visual Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chapterDetails.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.index}
                className="group flex flex-col bg-[#F7F1E5] rounded-2xl overflow-hidden border border-[#A6AD8B]/35 card-pressed card-hover transition-all"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle paper vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                  
                  {/* Page count pill */}
                  <div className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center gap-1.5 drop-shadow">
                    <Icon className="w-3.5 h-3.5 text-amber-200" />
                    <span>{item.pageCount}</span>
                  </div>

                  {/* Peek button overlay */}
                  <button
                    onClick={() => onOpenPreview(item.index)}
                    className="absolute top-3 right-3 bg-[#FAF6EE]/90 hover:bg-[#FAF6EE] text-[#353D22] text-xs font-semibold px-2.5 py-1.5 rounded-lg shadow flex items-center gap-1 backdrop-blur-sm transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Sample</span>
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A582F]">
                      {item.tag}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#302D25] group-hover:text-[#353D22] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#57534E] italic font-medium">
                      {item.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#A6AD8B]/20">
                    <p className="text-xs text-[#353D22] font-medium bg-[#EFE8D8]/70 p-2.5 rounded-lg border border-[#A6AD8B]/20 flex items-start gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C06C46] shrink-0 mt-0.5" />
                      <span>{item.highlight}</span>
                    </p>

                    <button
                      onClick={() => onOpenPreview(item.index)}
                      className="w-full mt-3 py-2 px-3 rounded-lg border border-[#353D22]/40 text-[#353D22] text-xs font-semibold hover:bg-[#353D22] hover:text-[#FAF6EE] transition-all flex items-center justify-center gap-1.5"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Excerpt from This Section →</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout quote banner */}
        <div className="mt-12 p-6 sm:p-8 bg-[#EFE8D8]/70 rounded-2xl border border-[#A6AD8B]/35 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif font-bold text-lg text-[#353D22]">
              "No expensive powders or 20-step wellness trends."
            </h4>
            <p className="text-xs sm:text-sm text-[#57534E]">
              Every single recipe and routine uses things already in your kitchen garden or local grocery store.
            </p>
          </div>
          <button
            onClick={() => onOpenPreview(0)}
            className="px-5 py-2.5 bg-[#353D22] text-[#FAF6EE] text-xs font-semibold rounded-xl hover:bg-[#4A582F] transition-all shrink-0 shadow-sm"
          >
            Browse Full Chapter Index
          </button>
        </div>

      </div>
    </section>
  );
};
