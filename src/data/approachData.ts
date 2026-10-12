import { ApproachPanelData } from '../types';

// Panel labels CONFIRMED: UNDERSTAND, CONCEPT, DESIGN, CREATE, LIVE — DARA_DESIGN_SPEC.md §6
// LIVE open state copy CONFIRMED from design PDF
// CREATE subtitle CONFIRMED from animation PDF (CONFIRMED (ANIM PDF))
// UNDERSTAND, CONCEPT, DESIGN body copy: NEEDS CONFIRMATION
export const APPROACH_PANELS: ApproachPanelData[] = [
  {
    id: 1,
    label: 'UNDERSTAND',
    title: 'UNDERSTAND',
    subtitle: 'NEEDS CONFIRMATION', // NEEDS CONFIRMATION
    body: 'NEEDS CONFIRMATION — open-state copy not present in either source PDF.',
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    isOpenDefault: false,
  },
  {
    id: 2,
    label: 'CONCEPT',
    title: 'CONCEPT',
    subtitle: 'NEEDS CONFIRMATION', // NEEDS CONFIRMATION
    body: 'NEEDS CONFIRMATION — open-state copy not present in either source PDF.',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    isOpenDefault: false,
  },
  {
    id: 3,
    label: 'DESIGN',
    title: 'DESIGN',
    subtitle: 'NEEDS CONFIRMATION', // NEEDS CONFIRMATION
    body: 'NEEDS CONFIRMATION — open-state copy not present in either source PDF.',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    isOpenDefault: false,
  },
  {
    id: 4,
    label: 'CREATE',
    // Subtitle CONFIRMED (ANIM PDF): "Craft, construction, progress"
    title: 'CREATE',
    subtitle: 'Craft, construction, progress',
    // Body: CONFIRMED partial — remainder NEEDS CONFIRMATION
    body: 'We stay close to the process, coordinating construction, quality and craftsmanship to ensure the [NEEDS CONFIRMATION — remainder of sentence not visible in source]',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    isOpenDefault: false,
  },
  {
    id: 5,
    label: 'LIVE',
    // All copy CONFIRMED from design PDF — DARA_DESIGN_SPEC.md §6
    title: 'LIVE',
    subtitle: 'Everyday use and connection',
    body: 'The true measure of our work is how people experience it — through everyday moments, connection, movement and life',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    isOpenDefault: true,
  },
];
