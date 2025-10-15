import React from 'react';

const PortfolioSection = () => {
  // scrollingTags는 데스크탑에서만 사용되므로 그대로 둡니다.


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
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-8">
        
        {/* --- 데스크탑 버전 레이아웃 (모바일에서 숨김) --- */}
        <div className="hidden lg:flex flex-col flex-1">
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
              
              {/* Scrolling Tags Box */}
              {/* <div className="bg-gray-200 rounded-sm p-3 w-80 overflow-hidden">
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
              </div> */}
            </div>
          </div>

          {/* Dotted Line */}
          <div className="border-b border-dashed border-gray-400 mb-6"></div>

          {/* Bottom Section - Three Column Layout */}
          <div className="flex gap-8 flex-1">
            {/* Left - Description and Button */}
            <div className="w-80 flex flex-col justify-start">
              <p className="text-xs leading-relaxed mb-6 jetbrains uppercase" style={{ color: '#212121' }}>
                Whimsical animations bring each character to life, revealing their profiles, personalities, and merchandise. 
                The project is defined by its soft pastel design and fluid motion, presented as a heartfelt, 
                fan-page-style portfolio that showcases a genuine passion for the characters.
              </p>
              <a 
                href="https://yoon664.github.io/sanrio_po/" 
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

            {/* Center - Main Image */}
            <div className="flex-1">
              <div className="rounded-sm overflow-hidden h-full">
                <img 
                  src="img/sanrio1.png" 
                  alt="Sanrio main" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right - Two Images Stacked */}
            <div className="w-80 flex flex-col gap-4">
              <div className="flex-1 rounded-sm overflow-hidden">
                <video 
                  src="img/sanrio2.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 rounded-sm overflow-hidden">
                <img 
                  src="img/sanrio3.png" 
                  alt="Sanrio detail" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- 모바일 버전 레이아웃 (데스크탑에서 숨김) --- */}
        <div className="lg:hidden flex flex-col flex-1">
          {/* 제목 */}
          <h1 className="text-3xl font-light leading-tight mb-4" style={{ color: '#212121' }}>
            Sanrio: Character &<br />
            Company page
          </h1>

          {/* 연도, 기술, 링크 */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-lg font-medium jetbrains" style={{ color: '#212121' }}>2025</div>
              <div className="text-xs tracking-wider uppercase jetbrains" style={{ color: '#212121' }}>
                ~ TECH WORKS
              </div>
            </div>
            <a 
              href="https://yoon664.github.io/sanrio_po/" 
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
          
          {/* 점선 */}
          <div className="border-b border-dashed border-gray-400 mb-4"></div>

          {/* 메인 이미지 */}
          <div className="mb-4">
            <img 
              src="img/sanrio1.png" 
              alt="Sanrio main" 
              className="w-full h-auto object-cover rounded-sm"
            />
          </div>

          {/* 설명 */}
          <p className="text-xs leading-relaxed jetbrains uppercase" style={{ color: '#212121' }}>
            Whimsical animations bring each character to life, revealing their profiles, personalities, and merchandise. 
            The project is defined by its soft pastel design and fluid motion, presented as a heartfelt, 
            fan-page-style portfolio that showcases a genuine passion for the characters.
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

export default PortfolioSection;