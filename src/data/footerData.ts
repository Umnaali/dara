// ALL footer content CONFIRMED verbatim from DARA_DESIGN_SPEC.md §13

// NOTE: Footer address line "Building 15th Floor – 515" — NEEDS CONFIRMATION (possible text layer artifact)
// Email casing "Info@dara.ae" preserved exactly as in source
// "Journal" quick link target: NEEDS CONFIRMATION
// Legal link targets: NEEDS CONFIRMATION
// No social links, copyright line, or newsletter — NOT in sources, do not add

export const FOOTER_DATA = {
  brandText: 'We create places where people feel they belong, shaped by how they live, work, gather and connect',
  columns: [
    {
      heading: 'LEGAL',
      links: [
        { label: 'Terms of Use', href: '#' }, // Link target NEEDS CONFIRMATION
        { label: 'Privacy Policy', href: '#' }, // Link target NEEDS CONFIRMATION
      ],
    },
    {
      heading: 'CONTACT US',
      lines: [
        'Dubai CommerCity',
        'Business Cluster –',
        'Building 15th Floor – 515', // NEEDS CONFIRMATION (PDF text layer artifact)
        'Dubai, UAE',
      ],
      email: 'Info@dara.ae', // Exact casing from source
    },
    {
      heading: 'QUICK LINKS',
      links: [
        { label: 'About', href: '#who-we-are' },
        { label: 'Journal', href: '#' }, // NEEDS CONFIRMATION — no journal page in sources
        { label: 'Contact', href: '#contact' },
      ],
    },
  ],
};
