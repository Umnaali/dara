import React, { useState } from 'react';
import { Logo } from './Logo';
import { NAV_ITEMS } from '../../data/navigationData';

export const HeaderNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleToggleNav = () => {
    setIsSpinning(true);
    setIsOpen((prev) => !prev);
    setTimeout(() => setIsSpinning(false), 600);
  };

  return (
    <>
      {/* Keyframe injection for nav panel fade-in */}
      <style>{`
        @keyframes navFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes iconSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-16 py-6 pointer-events-none">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">

          {/* Brand Logo — Top-Left */}
          <a
            href="#hero"
            className="pointer-events-auto flex items-center"
            aria-label="DARA home"
          >
            <Logo variant="wordmark" color="white" />
          </a>

          {/* Four-circle icon — Top-Right (A4: spin on hover/click, opens glass nav panel) */}
          <div className="relative pointer-events-auto">
            <button
              onClick={handleToggleNav}
              onMouseEnter={() => setIsSpinning(true)}
              onMouseLeave={() => !isOpen && setIsSpinning(false)}
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              <span
                style={{
                  display: 'inline-flex',
                  animation: isSpinning ? 'iconSpin 0.55s cubic-bezier(0.16,1,0.3,1) forwards' : 'none',
                }}
              >
                <Logo variant="four-circles" color="white" />
              </span>
            </button>

            {/* Frosted-glass nav panel — CONFIRMED items: home, about, team, contact us */}
            {isOpen && (
              <nav
                aria-label="Site Navigation"
                style={{ animation: 'navFadeIn 0.25s cubic-bezier(0.16,1,0.3,1) forwards' }}
                className="absolute right-0 top-16 w-60 glass-panel rounded-2xl overflow-hidden shadow-2xl"
              >
                <ul role="list">
                  {NAV_ITEMS.map((item, idx) => (
                    <li
                      key={item.id}
                      className={idx < NAV_ITEMS.length - 1 ? 'border-b border-white/10' : ''}
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-6 py-4 text-white text-base font-medium tracking-wide hover:bg-white/10 transition-colors duration-200 capitalize"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

        </div>
      </header>
    </>
  );
};
