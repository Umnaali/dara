import React from 'react';

interface LogoProps {
  variant?: 'wordmark' | 'four-circles' | 'footer-large';
  color?: 'white' | 'dark' | 'cream';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'wordmark',
  color = 'white',
  className = '',
}) => {
  const colorHex = color === 'white' ? '#FFFFFF' : color === 'cream' ? '#EFEDE3' : '#000000';

  if (variant === 'four-circles') {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="DARA Four Circles Mark"
      >
        <circle cx="11" cy="11" r="7" fill={colorHex} fillOpacity="0.9" />
        <circle cx="21" cy="11" r="7" fill={colorHex} fillOpacity="0.9" />
        <circle cx="11" cy="21" r="7" fill={colorHex} fillOpacity="0.9" />
        <circle cx="21" cy="21" r="7" fill={colorHex} fillOpacity="0.9" />
      </svg>
    );
  }

  if (variant === 'footer-large') {
    return (
      <span className={`font-['Syne'] font-extrabold tracking-tighter select-none ${className}`} style={{ color: colorHex }}>
        dara
      </span>
    );
  }

  return (
    <span className={`font-['Syne'] font-bold tracking-tight text-3xl select-none ${className}`} style={{ color: colorHex }}>
      dara
    </span>
  );
};
