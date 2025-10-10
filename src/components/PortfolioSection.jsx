import React from 'react';

const PortfolioSection = () => {
  const scrollingTags = [
    "3D Modeling", "Character Design", "Character Rigging", 
    "Texturing", "3D Animation"
  ];

  return (
    <section 
      id="works"
      className="w-full h-screen bg-gray-100 flex flex-col overflow-hidden sticky top-0"
      style={{ backgroundColor: '#f5f5f5', zIndex: 1 }}
    >
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-300">
        <div className="flex items-center gap-4">

          <h2 className="text-sm font-medium tracking-wider jetbrains" style={{ color: '#212121' }}>
            FEATURED WORK 01
          </h2>
        </div>
        
        <button className="bg-black text-white px-6 py-3 text-xs font-medium tracking-wider uppercase hover:bg-gray-800 transition-colors duration-300 group jetbrains">
          <span className="flex items-center gap-2">
            SEE ALL WORKS 
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </button>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-8">
        {/* Top Section - Title and Meta */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-light leading-tight" style={{ color: '#212121' }}>
              Sanrio: Character &<br />
              Company page
            </h1>
          </div>
          
          <div className="text-right ml-8 flex flex-col items-end">
            <div className="text-xl font-medium mb-2 jetbrains" style={{ color: '#212121' }}>2025</div>
            <div className="text-xs tracking-wider uppercase jetbrains mb-4" style={{ color: '#212121' }}>
              ~ TECH WORKS
            </div>
            
            {/* Scrolling Tags Box - Right aligned below meta */}
            <div className="bg-gray-200 rounded-sm p-3 w-80 overflow-hidden">
              <div className="flex animate-scroll whitespace-nowrap">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex gap-8 mr-8">
                    {scrollingTags.map((tag, index) => (
                      <span 
                        key={`${i}-${index}`}
                        className="text-xs jetbrains" 
                        style={{ color: '#212121' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dotted Line */}
        <div className="border-b border-dashed border-gray-400 mb-6"></div>

        {/* Bottom Section - Three Column Layout */}
        <div className="flex gap-8 flex-1">
          {/* Left - Description and Button (Narrower) */}
          <div className="w-80 flex flex-col justify-start">
            <p className="text-xs leading-relaxed mb-6 jetbrains uppercase" style={{ color: '#212121' }}>
              Whimsical animations bring each character to life, revealing their profiles, personalities, and merchandise. 
              The project is defined by its soft pastel design and fluid motion, presented as a heartfelt, 
              fan-page-style portfolio that showcases a genuine passion for the characters.
            </p>
            <button className="text-xs font-medium tracking-wider uppercase hover:opacity-70 transition-opacity duration-300 group jetbrains" style={{ color: '#212121' }}>
              <span className="flex items-center gap-2">
                VIEW PROJECT 
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>

          {/* Center - Main Image (Wider) */}
          <div className="flex-1">
            <div className="rounded-sm overflow-hidden h-full">
              <img 
                src="/img/sanrio1.png" 
                alt="3D Deep-Sea Environment" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Two Images Stacked */}
          <div className="w-80 flex flex-col gap-4">
            {/* Top Image */}
            <div className="flex-1 rounded-sm overflow-hidden">
              <video 
                src="/img/sanrio2.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom Image */}
            <div className="flex-1 rounded-sm overflow-hidden">
              <img 
                src="/img/sanrio3.png" 
                alt="3D Detail Image" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;