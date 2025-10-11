// AboutSection.jsx
import React, { useState, useEffect } from 'react';

const AboutSection = ({ personalData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slideData = [
    { number: '01', category: 'DEVELOPMENT', work: 'DEVELOPMENT' },
    { number: '02', category: 'MOTION', work: 'MOTION' },
    { number: '03', category: 'ILLUSTRATION', work: 'ILLUSTRATION' },
    { number: '04', category: 'PHOTOSHOP', work: 'PHOTOSHOP' }
  ];

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideData.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [slideData.length]);

  const current = slideData[currentSlide];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative glass-bg px-4 md:px-0">
      <div className="perspective-1000 w-full max-w-sm md:max-w-[920px] h-[600px] md:h-[480px] group">
        <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer group-hover:rotate-x-180">
          
          {/* Front Side - Yellow Notebook */}
          <div className="flip-card-front absolute inset-0 backface-hidden text-black shadow-2xl rounded-md relative overflow-hidden" style={{backgroundColor: '#ffe430'}}>
            {/* Background with notebook texture */}
            <div className="absolute inset-0" style={{backgroundColor: '#ffe430'}}></div>
            
            {/* 카드 앞면 점선 */}
            <div className="absolute top-8 left-0 right-0 border-t border-dashed border-gray-600 opacity-30 z-10"></div>
            <div className="absolute bottom-8 left-0 right-0 border-b border-dashed border-gray-600 opacity-30 z-10"></div>
            <div className="absolute right-8 top-0 bottom-0 border-r border-dashed border-gray-600 opacity-30 z-10"></div>
            <div className="hidden md:block absolute left-1/3 top-0 bottom-0 border-l border-dashed border-gray-600 opacity-30 z-10"></div>
            <div className="absolute left-8 top-0 bottom-0 border-l border-dashed border-gray-600 opacity-30 z-10"></div>
            
            {/* Notebook holes on the left */}
            <div className="absolute left-3 top-3 bottom-3 flex flex-col justify-between z-30">
              <div className="w-3 h-3 rounded-full" style={{ background: '#1C212C' }}></div>
              <div className="w-3 h-3 rounded-full" style={{ background: '#212633' }}></div>
              <div className="w-3 h-3 rounded-full" style={{ background: '#272E3B' }}></div>
              <div className="w-3 h-3 rounded-full" style={{ background: '#29313D' }}></div>
              <div className="w-3 h-3 rounded-full" style={{ background: '#3A4254' }}></div>
            </div>
            
            {/* Left side (모바일에서 숨김) */}
            <div className="hidden md:flex absolute left-8 top-0 bottom-0 w-[30%] flex-col items-center gap-0 p-0 relative overflow-hidden z-20">
              <div className="w-full py-3 px-4 flex justify-between items-center">
                <span className="text-xs uppercase jetbrains">{current.number}</span>
                <span className="text-xs uppercase jetbrains">{current.category}</span>
              </div>
              <div className="flex-1 w-full flex items-center justify-center p-4">
                <div className="w-full h-full flex items-center justify-center pt-3">
                  <img src="img/eunji.png" alt="Yoo Eunji" className="w-full h-full object-cover rounded-md shadow-lg" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }} />
                </div>
              </div>
              <div className="w-full pt-8 px-4 flex justify-between items-center">
                <div className="w-3 h-3 bg-black"></div>
                <span className="text-xs jetbrains">{current.number} / 04</span>
                <div className="w-3 h-3 bg-black"></div>
              </div>
            </div>
            
            {/* Right side (모바일/데스크탑 레이아웃 수정) */}
            <div className="absolute left-12 md:left-1/3 right-0 top-0 bottom-0 flex flex-col z-20 pr-8">
              <div className="py-3 px-4 flex justify-between items-center w-full">
                <div className="w-3 h-3 bg-black"></div>
                <span className="text-xs uppercase jetbrains">ABOUT</span>
                <div className="w-3 h-3 bg-black"></div>
              </div>
              
              <div className="py-8 md:py-1">
                <div className="text-left relative">
                  <h1 className="text-5xl sm:text-6xl font-light leading-none md:text-[80px] md:leading-[80px]" style={{fontFamily: '"Lock Serif Light", serif'}}>
                    Yoo Eunji
                  </h1>
                  <h2 className="text-5xl sm:text-6xl font-light leading-none md:text-[80px] md:leading-[80px]" style={{fontFamily: '"Lock Serif Light", serif'}}>
                    does
                  </h2>
                  <div className="absolute -bottom-8 md:-bottom-4 -left-3 md:left-0 right-0 border-b border-dashed border-gray-600 opacity-30"></div>
                </div>
              </div>
              
              <div className="py-12 md:py-0 md:flex-1 md:pt-6 md:pb-3 flex items-center justify-center relative">
                <div className="flex items-center space-x-4 md:space-x-8">
                  <span className="text-lg font-medium">&lt;</span>
                  <div className="text-center">
                    <p className="text-3xl md:text-[45px] md:leading-[40px] italic" style={{fontFamily: '"Biro Script reduced Regular", cursive'}}>
                      {current.work}
                    </p>
                  </div>
                  <span className="text-lg font-medium">&gt;</span>
                </div>
                <div className="absolute bottom-0 -left-3 md:left-0 right-0 border-b border-dashed border-gray-600 opacity-30"></div>
              </div>
              
              <div className="py-4 space-y-4">
                <div className="text-xs sm:text-sm leading-relaxed jetbrains px-4">
                  <p className="text-left">
                    I'm an enthusiastic and multifaceted visual artist, motion designer, graphic designer, illustrator, and photographer. Passionate about pushing creative boundaries, I constantly seek to expand my expertise and combine skills across various mediums. 
                    I thrive on problem-solving and embrace challenges WITH A PROACTIVE AND OPEN-MINDED APPROACH.
                  </p>
                </div>
                
                <div className="text-xs pt-1 px-4 jetbrains flex flex-wrap justify-between w-full text-left mt-16 md:mt-0">
                  <p className="uppercase hidden sm:block">CURRENTLY BASED IN</p>
                  <p className="uppercase">SAVANNAH, GA</p>
                  <p className="uppercase">32.0809° N, 81.0912° W</p>
                </div>
              </div>
            </div>
            
            {/* 앞장 오른쪽 세로문장 */}
            <div className="absolute -right-7 top-1/2 transform -translate-y-1/2 -rotate-90 z-20">
              <span className="text-xs uppercase jetbrains">YOOEUNJIWORKS</span>
            </div>
          </div>

          {/* Back Side - Dark Notebook */}
          <div className="flip-card-back absolute inset-0 backface-hidden rotate-x-180 bg-[#212121] text-white shadow-2xl rounded-md relative overflow-hidden">
            <div className="absolute top-8 left-0 right-0 border-t border-dashed border-white opacity-20 z-10"></div>
            <div className="absolute bottom-8 left-0 right-0 border-b border-dashed border-white opacity-20 z-10"></div>
            <div className="absolute left-8 top-0 bottom-0 border-l border-dashed border-white opacity-20 z-10"></div>
            <div className="absolute right-8 top-0 bottom-0 border-r border-dashed border-white opacity-20 z-10"></div>
            <div className="absolute left-3 top-3 bottom-3 flex flex-col justify-between z-30">
                <div className="w-3 h-3 rounded-full" style={{ background: '#1C212C' }}></div>
                <div className="w-3 h-3 rounded-full" style={{ background: '#212633' }}></div>
                <div className="w-3 h-3 rounded-full" style={{ background: '#272E3B' }}></div>
                <div className="w-3 h-3 rounded-full" style={{ background: '#29313D' }}></div>
                <div className="w-3 h-3 rounded-full" style={{ background: '#2E3442' }}></div>
            </div>
            <div className="absolute top-1 left-0 right-0 text-center z-20">
                <span className="text-xs uppercase jetbrains text-gray-400">ABOUT</span>
            </div>
            <div className="flex items-center justify-center h-full z-20">
                <div className="text-center">
                    <p className="text-6xl font-script italic text-gray-100 mb-4">
                    read more
                    </p>
                </div>
            </div>
            <div className="absolute bottom-1 left-0 right-0 text-center z-20">
                <span className="text-xs uppercase jetbrains text-gray-400">ABOUT</span>
            </div>
            <div className="absolute -right-7 top-1/2 transform -translate-y-1/2 -rotate-90 z-20">
                <span className="text-xs uppercase jetbrains text-gray-400">YOOEUNJIWORKS</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }
        .flip-card-back {
          transform: rotateX(180deg);
        }
        .font-script {
          font-family: 'Biro Script reduced Regular', 'Brush Script MT', cursive;
        }
        .group:hover .flip-card-inner {
          transform: rotateX(180deg);
        }
        .glass-bg {
          background: linear-gradient(
            135deg, 
            rgba(0, 0, 0, 0.95) 0%, 
            rgba(31, 41, 55, 0.9) 30%, 
            rgba(75, 85, 99, 0.8) 70%, 
            rgba(156, 163, 175, 0.7) 100%
          );
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        @media (max-width: 640px) {
          .text-xs {
            font-size: 0.6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;