/**
 * Central configuration for Margaret's Little Guide Landing Page
 * Editable by the store owner or through the in-app Stripe setup modal.
 */

export const siteConfig = {
  REGULAR_PRICE: 19.99,
  SALE_PRICE: 9.99,
  DISCOUNT_PERCENT: 50,
  SAVINGS_AMOUNT: 10.00,
  // Paste your real Stripe Checkout or Payment Link here, or configure it via the on-page settings button.
  STRIPE_PAYMENT_LINK: "", 

  // E-book Cover Image URL from brief
  BOOK_IMAGE_URL: "https://res.cloudinary.com/xqifsphi/image/upload/v1792623720/imagem_2026-10-21_200239202_qxnuyj.png",
  
  // Local high-fidelity generated images
  AUTHOR_IMAGE: "/src/assets/images/margaret_author_portrait_1792746753290.jpg",
  RECIPES_IMAGE: "/src/assets/images/look_inside_recipes_1792746753165.jpg",
  HERBS_IMAGE: "/src/assets/images/look_inside_herbs_1792746752443.jpg",
  ROUTINES_IMAGE: "/src/assets/images/look_inside_routines_1792746753418.jpg",

  title: "Margaret's Little Guide to Everyday Wellness",
  subtitle: "Cozy recipes, simple routines & timeless herbal wisdom crafted into a practical 80-page digital handbook.",
  
  bonuses: [
    {
      id: "gift-meal-planner",
      number: "Gift #1",
      title: "Margaret's Weekly Meal Planner",
      subtitle: "Planejador semanal de refeições",
      description: "A gentle 7-day nourishing layout with space for cozy seasonal suppers, batch-prep notes, and pantry staples.",
      value: "$9.00 Value",
      badge: "FREE ($9.00 Value)",
      features: ["7-Day Grid for Breakfast, Lunch & Dinner", "Leftover & Soup Repurposing Section", "Printable at standard 8.5x11 / A4"]
    },
    {
      id: "gift-grocery-checklist",
      number: "Gift #2",
      title: "Margaret's Reusable Grocery Checklist",
      subtitle: "Lista de feira e despensa organizada",
      description: "Categorized by farm stand produce, bulk grains, dried herbs, and home baking essentials to prevent food waste.",
      value: "$9.00 Value",
      badge: "FREE ($9.00 Value)",
      features: ["Organized by Market Sections", "Essential Cottage Herbs & Teas Pantry", "Reusable checklist format"]
    },
    {
      id: "gift-habit-tracker",
      number: "Gift #3",
      title: "Margaret's Daily Routine & Habit Tracker",
      subtitle: "Rastreador de hábitos simples e bem-estar",
      description: "A calming non-punitive ritual log to encourage warm morning tea, gentle daylight walks, and restorative evening pauses.",
      value: "$9.00 Value",
      badge: "FREE ($9.00 Value)",
      features: ["Morning, Midday & Evening Gentle Check-ins", "Water & Herbal Infusion tracker", "Gratitude & Sleep Peace notes"]
    }
  ],

  faqs: [
    {
      question: "How and when do I receive the guide?",
      answer: "Immediately! The moment your order is confirmed, an instant download link is delivered to your email inbox, plus you can download your 80-page guide and all 3 printable gifts right on the confirmation screen. You get lifetime access, and the download link never expires."
    },
    {
      question: "Can I read it on my phone, tablet, or print it?",
      answer: "Yes, absolutely. The guide is provided as a universal, high-resolution PDF. It looks crisp and gorgeous on iPhone, iPad, Android tablets, e-readers, Kindle, and desktop computers. It is also formatted in standard page proportions so you can easily print individual recipe cards or the entire guide at home or a local print shop."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "We offer an unconditional 30-Day 100% Happiness Guarantee. If the recipes, remedies, or gentle routines don't bring peace and wholesome comfort to your daily rhythm, simply send an email to help@margaretsguides.com for a swift, full refund. You even keep the 80-page guide and all 3 printable gifts as our thank-you for trying it."
    }
  ],

  lookInsideChapters: [
    {
      id: "recipes",
      title: "Hearty Homemade Recipes",
      subtitle: "Sopas, chás e pães reconfortantes",
      pageCount: "28 Pages",
      description: "Wholesome, budget-friendly comfort food made with simple pantry ingredients. From grandmother's slow-simmered vegetable broth to crusty no-knead rosemary bread and soothing nightcap drinks.",
      sampleExcerpt: {
        recipeName: "Golden Chamomile & Sweet Apple Stewed Oats",
        prepTime: "12 mins",
        servings: "2 bowls",
        ingredients: ["1 cup rolled organic oats", "1.5 cups infused chamomile tea", "1 crisp honeycrisp apple, thinly diced", "Pinch of ground cinnamon & nutmeg", "1 tsp raw blossom honey", "Splash of warm oat or fresh milk"],
        instructions: "Simmer oats gently in brewed chamomile tea instead of plain water to impart a soft herbal sweetness. Fold in diced apples and spices until creamy. Drizzle with raw honey."
      }
    },
    {
      id: "herbs",
      title: "Gentle Herbal Remedies",
      subtitle: "Tônicos naturais e infusões para o dia a dia",
      pageCount: "24 Pages",
      description: "Accessible, safe herbal wisdom passed down through generations. Easy kitchen remedies for throat comfort, better digestion after meals, and restorative calm before bedtime.",
      sampleExcerpt: {
        recipeName: "Margaret's Evening Restorative Infusion",
        prepTime: "8 mins",
        servings: "1 cozy teapot",
        ingredients: ["2 tsp dried chamomile blossoms", "1 tsp lemon balm leaves (melissa)", "1/2 tsp crushed lavender florets", "1 organic orange peel strip", "Boiling spring water (95°C)"],
        instructions: "Steep covered in a ceramic teapot for 7 minutes to preserve the delicate essential oils. Breathe in the warm aroma before each mindful sip."
      }
    },
    {
      id: "routines",
      title: "Mindful Home Routines",
      subtitle: "Pequenos rituais para desacelerar",
      pageCount: "28 Pages",
      description: "Practical strategies for creating calm corners, seasonal decluttering rhythms, quiet morning reflections, and unwinding without screens before bed.",
      sampleExcerpt: {
        recipeName: "The 15-Minute Cottage Morning Anchor",
        prepTime: "Daily Habit",
        servings: "Personal Rhythm",
        ingredients: ["5 minutes quiet hydration with warm water & lemon", "5 minutes opening the window to fresh morning breeze", "5 minutes pen-to-paper intentions for the day"],
        instructions: "Resist checking notifications for the first 30 minutes. Let your eyes adjust to natural sunlight first to gently set your natural circadian rhythm."
      }
    }
  ]
};
