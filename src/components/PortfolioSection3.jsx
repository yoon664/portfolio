import React from 'react';

const PortfolioSection3 = () => {
  const scrollingTags = [
    "3D Modeling", "Character Design", "Character Rigging", 
    "Texturing", "3D Animation"
  ];

  return (
    <section 
      id="works3"
      className="w-full h-screen bg-gray-100 flex flex-col overflow-hidden sticky top-0"
      style={{ backgroundColor: '#DE7439', zIndex: 3 }}
    >
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-300">
        <div className="flex items-center gap-4">
          <h2 className="text-sm font-medium tracking-wider jetbrains" style={{ color: '#212121' }}>
            FEATURED WORK 03
          </h2>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-8">

        {/* --- 데스크탑 버전 레이아웃 (모바일에서 숨김) --- */}
        <div className="hidden lg:flex flex-col flex-1">
          {/* Top Section - Title and Meta */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-light leading-tight" style={{ color: '#212121' }}>
                Hanhwa<br />
                Company & History
              </h1>
            </div>
            
            <div className="text-right ml-8 flex flex-col items-end">
              <div className="text-xl font-medium mb-2 jetbrains" style={{ color: '#212121' }}>2025</div>
              <div className="text-xs tracking-wider uppercase jetbrains mb-4" style={{ color: '#212121' }}>
                ~ TECH WORKS
              </div>
              
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
            <div className="w-80 flex flex-col justify-start">
              <p className="text-xs leading-relaxed mb-6 jetbrains uppercase" style={{ color: '#212121' }}>
                A dynamic website created to showcase the rich history and brand identity of the Hanhwa Eagles. The site utilizes scroll-based animations and a clean, modern interface to guide users through the team's significant milestones and evolution in an engaging narrative format.
              </p>
              <a 
                href="https://yoon664.github.io/han-eagle/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group overflow-hidden px-4 py-2 text-xs font-medium tracking-wider uppercase jetbrains inline-block bg-black text-white hover:text-black transition-colors duration-400 ease-out"
              >
                <div className="absolute bottom-0 left-0 right-0 h-0 bg-white transition-all duration-400 ease-out group-hover:h-full z-0"></div>
                <span className="relative flex items-center gap-2 z-10">
                  VIEW PROJECT 
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </a>
            </div>

            <div className="flex-1">
              <div className="rounded-sm overflow-hidden h-full">
                <img 
                  src="img/hanhwa.png" 
                  alt="Hanhwa main" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-80 flex flex-col gap-4">
              <div className="flex-1 rounded-sm overflow-hidden">
                <video 
                  src="img/hanhwa3.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 rounded-sm overflow-hidden">
                <video 
                  src="img/hanhwa2.mp4" 
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

        {/* --- 모바일 버전 레이아웃 (데스크탑에서 숨김) --- */}
        <div className="lg:hidden flex flex-col flex-1">
          <h1 className="text-3xl font-light leading-tight mb-4" style={{ color: '#212121' }}>
            Hanhwa<br />
            Company & History
          </h1>

          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-lg font-medium jetbrains" style={{ color: '#212121' }}>2025</div>
              <div className="text-xs tracking-wider uppercase jetbrains" style={{ color: '#212121' }}>
                ~ TECH WORKS
              </div>
            </div>
            <a 
              href="https://yoon664.github.io/han-eagle/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group overflow-hidden px-4 py-2 text-xs font-medium tracking-wider uppercase jetbrains inline-block bg-black text-white hover:text-black transition-colors duration-400 ease-out"
            >
              <div className="absolute bottom-0 left-0 right-0 h-0 bg-white transition-all duration-400 ease-out group-hover:h-full z-0"></div>
              <span className="relative flex items-center gap-2 z-10">
                VIEW PROJECT 
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>
          </div>
          
          <div className="border-b border-dashed border-gray-400 mb-4"></div>

          <div className="mb-4">
            <img 
              src="img/hanhwa.png" 
              alt="Hanhwa main" 
              className="w-full h-auto object-cover rounded-sm"
            />
          </div>

          <p className="text-xs leading-relaxed jetbrains uppercase" style={{ color: '#212121' }}>
            A dynamic website created to showcase the rich history and brand identity of the Hanhwa Eagles. The site utilizes scroll-based animations and a clean, modern interface to guide users through the team's significant milestones and evolution in an engaging narrative format.
          </p>
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

export default PortfolioSection3;