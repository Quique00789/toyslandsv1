import React from 'react';
import { Puzzle } from 'lucide-react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 64, className = "" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500 rounded-lg blur-sm"></div>
        <div className="relative bg-gradient-to-r from-blue-600 to-red-500 p-3 rounded-lg flex items-center justify-center">
          <Puzzle size={size} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Logo;