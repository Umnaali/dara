import { NewsItemData } from '../types';

// ALL headlines and descriptions CONFIRMED verbatim from DARA_DESIGN_SPEC.md §11
// Card 1 description: TRUNCATED in source — remainder NEEDS CONFIRMATION
// Source/date overlays confirmed from ANIM PDF — whether they appear in final design: NEEDS CONFIRMATION
export const NEWS_ITEMS: NewsItemData[] = [
  {
    id: 'rak-central-professionals',
    headline: "Marjan's RAK Central to host 6,000 professionals, 4,000 residential units",
    description: "RAK Central is set to become a major business and lifestyle destination, with more than [NEEDS CONFIRMATION — truncated in source PDF]",
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    sourceOverlay: 'Khaleej Times', // CONFIRMED (ANIM PDF) — final design NEEDS CONFIRMATION
    dateOverlay: 'September 10, 2025', // CONFIRMED (ANIM PDF) — final design NEEDS CONFIRMATION
    linkUrl: '#',
  },
  {
    id: 'dara-27-floor',
    headline: "Dara properties acquires Land for 27-Floor residential building In RAK Central",
    description: "Dara properties secured land at RAK Central for a 27-floor residential development, marking its entry into the Ras Al Khaimah real estate market.",
    imageUrl: 'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80',
    sourceOverlay: 'Construction Business News Middle East', // CONFIRMED (ANIM PDF)
    dateOverlay: 'April 28, 2025', // CONFIRMED (ANIM PDF)
    linkUrl: '#',
  },
  {
    id: 'marjan-welcomes-dara',
    headline: "Marjan welcomes Dara properties to RAK central",
    description: "Marjan welcomed Dara properties to RAK Central following the agreement for a new residential development within the mixed-use destination.",
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    sourceOverlay: 'WOW-RAK', // CONFIRMED (ANIM PDF)
    dateOverlay: 'April 24, 2025', // CONFIRMED (ANIM PDF)
    linkUrl: '#',
  },
];
