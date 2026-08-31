import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const dimensions = size === 'sm' ? 'w-12 h-12' : size === 'lg' ? 'w-24 h-24' : 'w-16 h-16';

  return (
    <div 
      className={`rounded-full bg-[#FAFAF7] border-2 border-[#F9CA31]/70 flex items-center justify-center overflow-hidden shadow-md shrink-0 ${dimensions} ${className}`}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full p-0.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer Circular Ring */}
        <circle cx="50" cy="50" r="47" stroke="#F9CA31" strokeWidth="2.5" className="opacity-90" />
        
        {/* Pen Tool Icon at Top */}
        <g transform="translate(50, 14) scale(0.65)">
          <path d="M0 -6 L6 6 L-6 6 Z" fill="#D8A915" />
          <rect x="-3" y="6" width="6" height="5" fill="#D8A915" rx="1" />
          <path d="M-9 -3 L-14 -3 M9 -3 L14 -3" stroke="#D8A915" strokeWidth="2" strokeLinecap="round" />
          <rect x="-16" y="-5" width="4" height="4" fill="#D8A915" rx="0.5" />
          <rect x="12" y="-5" width="4" height="4" fill="#D8A915" rx="0.5" />
        </g>

        {/* Dynamic Golden Swoosh Banner */}
        <path d="M 16 70 C 35 82, 68 76, 88 32 C 82 44, 56 74, 20 74 Z" fill="#F9CA31" className="opacity-95" />

        {/* Serif UG Typography */}
        <text x="29" y="64" fontFamily="Georgia, serif" fontSize="40" fontWeight="bold" fill="#050505">U</text>
        <text x="59" y="64" fontFamily="Georgia, serif" fontSize="40" fontWeight="bold" fill="#050505">G</text>
      </svg>
    </div>
  );
};
