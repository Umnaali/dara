import { RakStatItem } from '../types';

// All statistics CONFIRMED from DARA_DESIGN_SPEC.md §7
// NOTE: asterisk (*) footnotes exist — no source text/attribution provided in PDFs (NEEDS CONFIRMATION)
// "fitch" lowercase preserved exactly as shown in design PDF
export const RAK_STATS: RakStatItem[] = [
  {
    id: 'rating',
    label: 'RATING',
    figure: 'A',
    title: 'Grade investment',
    footnote: 'A- by fitch & A/A-1 by S&P',
  },
  {
    id: 'tourism',
    label: 'TOURISM',
    figure: '5.5M',
    title: 'Annual visitors*',
    footnote: 'A 40% projected tourism increase by 2030*',
  },
  {
    id: 'population',
    label: 'POPULATION',
    figure: '650K',
    title: 'Inhabitants by 2030',
    footnote: 'Population projected to grow by 60%*',
  },
];

// CONFIRMED body copy from DARA_DESIGN_SPEC.md §7
export const RAK_COPY = {
  heading: 'A new chapter',
  subLabel: 'Ras Al Khaimah',
  paragraphs: [
    "Dara is bringing its development philosophy to one of the UAE's fastest-evolving destinations; Ras Al Khaimah.",
    "Ras Al Khaimah combines long-standing stability with a diversified economy spanning manufacturing, tourism, mining and logistics.",
    "Continued growth across commercial, professional and industrial activity reflects the Emirate's expanding business environment and economic momentum.",
  ],
};
