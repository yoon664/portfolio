import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Left Text */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
        <p className="text-sm tracking-wider font-light transform -rotate-90 origin-center whitespace-nowrap">
          A COLLECTION OF VISUAL WORKS
        </p>
      </div>

      {/* Right Text */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
        <p className="text-sm tracking-wider font-light transform rotate-90 origin-center whitespace-nowrap">
          CREATIVE DEVELOPER
        </p>
      </div>

      {/* Center Content */}
      <div className="text-center z-10 px-6">
        <div className="w-64 h-64 mx-auto mb-16 border-2 border-gray-700 border-dashed rounded-lg flex items-center justify-center">
          <p className="text-gray-500 text-sm">3D ELEMENT PLACEHOLDER</p>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm tracking-widest mb-4 font-light">SCROLL TO EXPLORE</p>
        <div className="text-xl animate-bounce">↓</div>
      </div>
    </section>
  );
};

export default HeroSection;