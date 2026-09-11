import React from 'react';

interface VLogoProps {
  className?: string;
  size?: number;
  id?: string;
}

/**
 * Elegant, minimalist architectural V logo monogram.
 * Crafted with precise geometric ratios (2:1 slope) and a subtle harmonic parallel inner accent.
 * Clean, restrained, and timeless — zero clutter or unnecessary effects.
 */
export const VLogo: React.FC<VLogoProps> = ({ className = 'w-6 h-6', size, id }) => {
  return (
    <svg
      id={id}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-label="V Monogram Logo"
    >
      {/* Outer Precision Architectural V */}
      <path
        d="M9 10 L20 32 L31 10"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Inner Harmonic Parallel Accent */}
      <path
        d="M14.5 10 L20 21 L25.5 10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />

      {/* Subtle Central Geometric Focus Point */}
      <circle
        cx="20"
        cy="26.5"
        r="1.2"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  );
};
