import { NavItem } from '../types';

// EXACT CASING & LABELS CONFIRMED FROM DARA_DESIGN_SPEC.md (§2.2)
// items: home, about, team, contact us
export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'home', href: '#hero' },
  { id: 'about', label: 'about', href: '#who-we-are' },
  { id: 'team', label: 'team', href: '#why-dara' },
  { id: 'contact-us', label: 'contact us', href: '#contact' },
];
