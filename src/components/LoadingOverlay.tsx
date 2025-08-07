import React from 'react';

interface LoadingOverlayProps {
  isLoading: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm transition-all duration-300">
      <div className="relative">
        {/* Subtle pulse animation */}
        <div className="w-12 h-12 border-4 border-[#ffa500]/30 border-t-[#ffa500] rounded-full animate-spin"></div>
        
        {/* Ripple effect */}
        <div className="absolute inset-0 w-12 h-12 border-2 border-[#ffa500]/20 rounded-full animate-ping"></div>
        
        {/* Loading text */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300 font-medium animate-pulse">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
};
