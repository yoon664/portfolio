import React from 'react';

const PortfolioSection2 = () => {
  const scrollingTags = [
    "3D Modeling", "Character Design", "Character Rigging", 
    "Texturing", "3D Animation"
  ];

  return (
    <section 
      id="works"
      className="w-full h-screen bg-gray-100 flex flex-col overflow-hidden sticky top-0"
      style={{ backgroundColor: '#008761', zIndex: 2 }}
    >
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-300">
        <div className="flex items-center gap-4">

          <h2 className="text-sm font-medium tracking-wider jetbrains" style={{ color: '#fffff' }}>
            FEATURED WORK 02
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
            <h1 className="text-4xl md:text-5xl font-light leading-tight" style={{ color: '#fffff' }}>
              Amio<br />
              Pulmuone amio
            </h1>
          </div>
          
          <div className="text-right ml-8 flex flex-col items-end">
            <div className="text-xl font-medium mb-2 jetbrains" style={{ color: '#fffff' }}>2025</div>
            <div className="text-xs tracking-wider uppercase jetbrains mb-4" style={{ color: '#fffff' }}>
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
            <p className="text-xs leading-relaxed mb-6 jetbrains uppercase" style={{ color: '#fffff' }}>
              brand website for the premium pet food brand Amio. 
              The site features an interactive design where content dynamically appears as users scroll, 
              allowing them to explore the brand story, product lineup, and unique ingredients in an engaging and immersive way.
            </p>
            <button className="text-xs font-medium tracking-wider uppercase hover:opacity-70 transition-opacity duration-300 group jetbrains" style={{ color: '#fffff' }}>
              <span className="flex items-center gap-2">
                VIEW PROJECT 
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>

          {/* Center - Main Image (Wider) */}
          <div className="flex-1">
            <div className="rounded-sm overflow-hidden h-full">
              <video 
                src="/img/amio1.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Two Images Stacked */}
          <div className="w-80 flex flex-col gap-4">
            {/* Top Image */}
            <div className="flex-1 rounded-sm overflow-hidden">
              <video 
                src="/img/amio3.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom Image */}
            <div className="flex-1 rounded-sm overflow-hidden">
              <video 
                src="/img/amio2.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
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

export default PortfolioSection2;