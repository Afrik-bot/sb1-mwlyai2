import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-8 w-auto', color = '#FF4500' }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 1200 1400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100 0h1000v1000c0 276.142-223.858 500-500 500S100 1276.142 100 1000V0z"
          fill={color}
        />
        <path
          d="M300 200h600v600c0 165.685-134.315 300-300 300S300 965.685 300 800V200z"
          fill="white"
        />
        <path
          d="M500 400h200v200c0 55.228-44.772 100-100 100s-100-44.772-100-100V400z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Logo;