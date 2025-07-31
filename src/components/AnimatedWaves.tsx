import React from "react";

export const AnimatedWaves: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Multiple wave layers for depth */}
      <div className="absolute inset-0">
        {/* Wave 1 - Slow and deep */}
        <div 
          className="absolute bottom-0 left-0 w-full h-32 opacity-20 animate-wave-slow"
          style={{
            background: 'linear-gradient(45deg, #ffa500, #ff8c00, #ffa500)',
            transformOrigin: 'center bottom'
          }}
        />
        
        {/* Wave 2 - Medium speed */}
        <div 
          className="absolute bottom-0 left-0 w-full h-24 opacity-30 animate-wave-medium"
          style={{
            background: 'linear-gradient(45deg, #ff8c00, #ffa500, #ff8c00)',
            transformOrigin: 'center bottom'
          }}
        />
        
        {/* Wave 3 - Fast and shallow */}
        <div 
          className="absolute bottom-0 left-0 w-full h-16 opacity-40 animate-wave-fast"
          style={{
            background: 'linear-gradient(45deg, #ffa500, #ff6b35, #ffa500)',
            transformOrigin: 'center bottom'
          }}
        />
        
        {/* Floating particles */}
        <div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#ffa500] rounded-full opacity-60 animate-float-slow"
        />
        <div 
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#ff8c00] rounded-full opacity-40 animate-float-medium"
        />
        <div 
          className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-[#ffa500] rounded-full opacity-50 animate-float-fast"
        />
      </div>
    </div>
  );
}; 