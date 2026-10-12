import React from 'react';
import { FOOTER_DATA } from '../../data/footerData';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="w-full bg-[#000000] text-white py-16 px-6 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Rule */}
        <div className="border-t border-white/15 mb-14"></div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand Column */}
          <div className="space-y-5">
            {/* Four circles row logo */}
            <div className="flex gap-1.5">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-5 h-5 rounded-full bg-white/90"></div>
              ))}
            </div>
            {/* CONFIRMED brand text — DARA_DESIGN_SPEC.md §13 */}
            <p className="text-white/60 text-sm leading-relaxed max-w-[220px]">
              {FOOTER_DATA.brandText}
            </p>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold mb-6">
              {FOOTER_DATA.columns[0].heading}
            </h3>
            <ul className="space-y-3">
              {FOOTER_DATA.columns[0].links?.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold mb-6">
              {FOOTER_DATA.columns[1].heading}
            </h3>
            <address className="not-italic space-y-1.5">
              {FOOTER_DATA.columns[1].lines?.map((line, i) => (
                <p key={i} className="text-white/70 text-sm">{line}</p>
              ))}
              <div className="pt-3">
                <a
                  href={`mailto:${FOOTER_DATA.columns[1].email}`}
                  className="text-white/70 text-sm hover:text-white transition-colors duration-300"
                >
                  {/* CONFIRMED email casing: "Info@dara.ae" */}
                  {FOOTER_DATA.columns[1].email}
                </a>
              </div>
            </address>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold mb-6">
              {FOOTER_DATA.columns[2].heading}
            </h3>
            <ul className="space-y-3">
              {FOOTER_DATA.columns[2].links?.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Row: Large "dara" wordmark bottom-right — CONFIRMED DARA_DESIGN_SPEC.md §13 */}
        {/* CONFIRMED: logo is STATIC — DARA_ANIMATION_SPEC.md A16 */}
        <div className="flex justify-end">
          <span
            className="font-['Syne'] font-extrabold text-white select-none tracking-tighter"
            style={{ fontSize: 'clamp(80px, 12vw, 180px)', lineHeight: '0.9' }}
            aria-label="dara"
          >
            dara
          </span>
        </div>

      </div>
    </footer>
  );
};
