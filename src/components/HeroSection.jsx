import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-black">

      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
        <p className="text-base font-light tracking-widest text-gray-300 uppercase">
          A Collection of Visual Works
        </p>
      </div>


      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
        <p className="text-base font-light tracking-widest text-gray-300 uppercase text-right">
          YOO EUNJI 2026
        </p>
      </div>

      {/* 3d 요소 */}


      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center z-10">
        <p className="text-base font-light tracking-widest text-gray-300 mb-6 uppercase">
          Scroll to Explore
        </p>
        <div className="flex justify-center">
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

    </section>
  );
};

export default HeroSection;