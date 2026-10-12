import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'translucent' | 'solid-black' | 'solid-white';
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'solid-black',
  children,
  href,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white active:scale-[0.98]";
  
  let variantStyles = "";
  switch (variant) {
    case 'outline':
      variantStyles = "border border-white text-white bg-transparent hover:bg-white/10";
      break;
    case 'translucent':
      variantStyles = "bg-white/15 text-white backdrop-blur-md hover:bg-white/25 border border-white/10";
      break;
    case 'solid-white':
      variantStyles = "bg-white text-black hover:bg-[#EFEDE3]";
      break;
    case 'solid-black':
    default:
      variantStyles = "bg-black text-white hover:bg-[#191919]";
      break;
  }

  const combinedClasses = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
