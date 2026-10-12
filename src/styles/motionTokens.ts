// Central motion configuration file
// Every timing, duration, and curve is marked UNCONFIRMED per DARA_ANIMATION_SPEC.md

export const MOTION_TOKENS = {
  // Durations (UNCONFIRMED)
  durationFast: 0.3,          // UNCONFIRMED
  durationNormal: 0.6,        // UNCONFIRMED
  durationSlow: 1.0,          // UNCONFIRMED
  durationHeroCrossfade: 1.5, // UNCONFIRMED

  // Easing curves (UNCONFIRMED)
  easeOutSmooth: [0.16, 1, 0.3, 1] as const, // UNCONFIRMED
  easeInOut: [0.42, 0, 0.58, 1] as const,    // UNCONFIRMED

  // Scroll parameters (UNCONFIRMED)
  revealDistanceY: 30,        // UNCONFIRMED
  staggerInterval: 0.15,      // UNCONFIRMED
  parallaxSpeedFactor: 0.2,   // UNCONFIRMED
};
