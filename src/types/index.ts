export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ApproachPanelData {
  id: number;
  label: string;
  title: string;
  subtitle?: string;
  body: string;
  imageUrl: string;
  isOpenDefault?: boolean;
}

export interface RakStatItem {
  id: string;
  label: string;
  figure: string;
  title: string;
  footnote: string;
}

export interface LandscapeItem {
  id: string;
  label?: string; // Optional label (3 of 4 circles labelled)
  imageUrl: string;
}

export interface WhyDaraCardData {
  id: string;
  title: string;
  subtitle: string;
  hoverCopy: string;
  imageUrl: string;
}

export interface NewsItemData {
  id: string;
  headline: string;
  description: string;
  imageUrl: string;
  sourceOverlay?: string;
  dateOverlay?: string;
  linkUrl: string;
}
