import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-black">
      {/* Left Side Text */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
        <p className="text-sm font-light tracking-widest text-gray-300 uppercase">
          A Collection of Visual Works
        </p>
      </div>

      {/* Right Side Text */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
        <p className="text-sm font-light tracking-widest text-gray-300 uppercase text-right">
          Creative Developer 2025
        </p>
      </div>

      {/* Center Content - 3D Element Placeholder */}
      <div className="flex items-center justify-center z-10">
        <div className="w-80 h-80 border border-gray-700 border-dashed rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-2 border-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-600 rounded-full animate-pulse"></div>
            </div>
            <p className="text-xs font-light text-gray-500 tracking-wider uppercase">
              3D Element
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center z-10">
        <p className="text-xs font-light tracking-widest text-gray-300 mb-6 uppercase">
          Scroll to Explore
        </p>
        <div className="flex justify-center">
          <div className="w-px h-8 bg-gray-600 relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none" 
                className="text-gray-300 animate-bounce"
              >
                <path 
                  d="M6 1L6 11M6 11L10 7M6 11L2 7" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left corner accent */}
        <div className="absolute top-20 left-20 w-px h-16 bg-gray-800"></div>
        <div className="absolute top-20 left-20 w-16 h-px bg-gray-800"></div>
        
        {/* Bottom right corner accent */}
        <div className="absolute bottom-20 right-20 w-px h-16 bg-gray-800"></div>
        <div className="absolute bottom-20 right-20 w-16 h-px bg-gray-800"></div>
      </div>
    </section>
  );
};

export default HeroSection;