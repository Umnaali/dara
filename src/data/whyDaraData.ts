import { WhyDaraCardData } from '../types';

// Card titles, subtitles, and hover copy CONFIRMED — DARA_DESIGN_SPEC.md §9
// Card 3 hover copy: NEEDS CONFIRMATION — not shown in either source PDF
// Card 3 image: conflict between design PDF (desert hills) and animation PDF (Dubai skyline) — NEEDS CONFIRMATION
export const WHY_DARA_CARDS: WhyDaraCardData[] = [
  {
    id: 'built-on-experience',
    title: 'BUILT\nON EXPERIENCE',
    subtitle: '20+ Years of experience',
    // CONFIRMED (ANIM PDF) hover copy — DARA_DESIGN_SPEC.md §9
    hoverCopy: 'With more than two decades of international expertise across development, design and construction, Dara brings experience across the full development journey.',
    imageUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'people-behind-every-decision',
    title: 'PEOPLE BEHIND\nEVERY DECISION',
    subtitle: 'A team in action',
    // CONFIRMED (ANIM PDF) hover copy — DARA_DESIGN_SPEC.md §9
    hoverCopy: 'Dara brings together experienced professionals across development, construction, strategy and asset management; combining expertise with a shared commitment to creating better places.',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'built-for-long-term',
    title: 'BUILT FOR\nTHE LONG TERM',
    subtitle: 'Creating lasting value',
    hoverCopy: 'NEEDS CONFIRMATION — hover copy not shown in either source PDF.',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80', // NEEDS CONFIRMATION (desert hills vs Dubai skyline)
  },
];
