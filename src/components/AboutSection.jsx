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
    <section id="about" className="min-h-screen flex items-center justify-center relative glass-bg">
      <div className="perspective-1000 w-[920px] h-[480px] group">
        <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer group-hover:rotate-x-180">
          
          {/* Front Side - Yellow Notebook */}
          <div className="flip-card-front absolute inset-0 backface-hidden text-black shadow-2xl rounded-md relative overflow-hidden" style={{backgroundColor: '#ffe430'}}>
            {/* Background with notebook texture */}
            <div className="absolute inset-0" style={{backgroundColor: '#ffe430'}}></div>
            
            {/* 카드 앞면 점선 */}
            <div className="absolute top-8 left-0 right-0 border-t border-dashed border-gray-600 opacity-30 z-10"></div>
            <div className="absolute bottom-8 left-0 right-0 border-b border-dashed border-gray-600 opacity-30 z-10"></div>
            <div className="absolute right-8 top-0 bottom-0 border-r border-dashed border-gray-600 opacity-30 z-10"></div>
            <div className="absolute left-1/3 top-0 bottom-0 border-l border-dashed border-gray-600 opacity-30 z-10"></div>
            <div className="absolute left-8 top-0 bottom-0 border-l border-dashed border-gray-600 opacity-30 z-10"></div>
            
            {/* Notebook holes on the left - aligned with left area */}
            <div className="absolute left-3 top-3 bottom-3 flex flex-col justify-between z-30">
              <div className="w-3 h-3 rounded-full" style={{
                backgroundColor: '#d4a948',
                boxShadow: 'inset 0 0 4px rgba(0,0,0,0.8), inset 0 2px 2px rgba(0,0,0,0.6), 0 0 2px rgba(0,0,0,0.3)',
                background: 'radial-gradient(circle, #b8903c 20%, #d4a948 50%)'
              }}></div>
              <div className="w-3 h-3 rounded-full" style={{
                backgroundColor: '#d4a948',
                boxShadow: 'inset 0 0 4px rgba(0,0,0,0.8), inset 0 2px 2px rgba(0,0,0,0.6), 0 0 2px rgba(0,0,0,0.3)',
                background: 'radial-gradient(circle, #b8903c 20%, #d4a948 50%)'
              }}></div>
              <div className="w-3 h-3 rounded-full" style={{
                backgroundColor: '#d4a948',
                boxShadow: 'inset 0 0 4px rgba(0,0,0,0.8), inset 0 2px 2px rgba(0,0,0,0.6), 0 0 2px rgba(0,0,0,0.3)',
                background: 'radial-gradient(circle, #b8903c 20%, #d4a948 50%)'
              }}></div>
              <div className="w-3 h-3 rounded-full" style={{
                backgroundColor: '#d4a948',
                boxShadow: 'inset 0 0 4px rgba(0,0,0,0.8), inset 0 2px 2px rgba(0,0,0,0.6), 0 0 2px rgba(0,0,0,0.3)',
                background: 'radial-gradient(circle, #b8903c 20%, #d4a948 50%)'
              }}></div>
              <div className="w-3 h-3 rounded-full" style={{
                backgroundColor: '#d4a948',
                boxShadow: 'inset 0 0 4px rgba(0,0,0,0.8), inset 0 2px 2px rgba(0,0,0,0.6), 0 0 2px rgba(0,0,0,0.3)',
                background: 'radial-gradient(circle, #b8903c 20%, #d4a948 50%)'
              }}></div>
            </div>
            
            {/* Left side (1/3 width) - flex container with Framer styles */}
            <div className="absolute left-8 top-0 bottom-0 w-[30%] flex flex-col items-center gap-0 p-0 relative overflow-hidden z-20">
              {/* Left top section - slide data with ends positioning */}
              <div className="w-full py-3 px-4 flex justify-between items-center">
                <span className="text-xs uppercase jetbrains">{current.number}</span>
                <span className="text-xs uppercase jetbrains">{current.category}</span>
              </div>
              
              {/* Left middle section - rotating images area */}
              <div className="flex-1 w-full">
                {/* This space is reserved for rotating images to be added later */}
              </div>
              
              {/* Left bottom section - slide counter - absolute positioning for bottom */}
              <div className="w-full py-3 px-4 flex justify-between items-center">
                <div className="w-3 h-3 bg-black"></div>
                <span className="text-xs jetbrains">{current.number} / 06</span>
                <div className="w-3 h-3 bg-black"></div>
              </div>
            </div>
            
            {/* Right side (2/3 width) - flex container with only right padding */}
            <div className="absolute left-1/3 right-0 top-0 bottom-0 flex flex-col z-20 pr-8">
              
              {/* Right top section - ABOUT label with squares at ends */}
              <div className="py-3 px-4 flex justify-between items-center w-full">
                <div className="w-3 h-3 bg-black"></div>
                <span className="text-xs uppercase jetbrains">ABOUT</span>
                <div className="w-3 h-3 bg-black"></div>
              </div>
              
              {/* Right upper section - name + "does" */}
              <div className="py-4">
                <div className="text-left relative">
                  <h1 className="text-6xl font-light leading-none" style={{fontFamily: '"Lock Serif Light", serif', fontSize: '80px', lineHeight: '80px'}}>
                    Yoo Eunji
                  </h1>
                  <h2 className="text-6xl font-light leading-none" style={{fontFamily: '"Lock Serif Light", serif', fontSize: '80px', lineHeight: '80px'}}>
                    does
                  </h2>
                  {/* 점선 after title */}
                  <div className="absolute -bottom-4 left-0 right-0 border-b border-dashed border-gray-600 opacity-30"></div>
                </div>
              </div>
              
              {/* Right middle section - work category */}
              <div className="flex-1 flex items-center justify-center relative">
                <div className="flex items-center space-x-8">
                  <span className="text-lg font-medium">&lt;</span>
                  <div className="text-center">
                    <p className="text-3xl italic font-script" style={{fontFamily: '"Biro Script reduced Regular", cursive', fontSize: '45px', lineHeight: '40px'}}>
                      {current.work}
                    </p>
                  </div>
                  <span className="text-lg font-medium">&gt;</span>
                </div>
                {/* 점선 after navigation */}
                <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-600 opacity-30"></div>
              </div>
              
              {/* Right bottom section - description + location */}
              <div className="py-4 space-y-4">
                {/* Description text */}
                <div className="text-sm leading-relaxed jetbrains px-4">
                  <p className="text-left">
                    I'm an enthusiastic and multifaceted visual artist, motion designer, graphic designer, illustrator, and photographer. Passionate about pushing creative boundaries, I constantly seek to expand my expertise and combine skills across various mediums. 
                    I thrive on problem-solving and embrace challenges WITH A PROACTIVE AND OPEN-MINDED APPROACH.
                  </p>
                </div>
                
                {/* Location info */}
                <div className="text-xs py-4 px-4 jetbrains flex flex-row justify-between w-full">
                  <p className="uppercase">CURRENTLY BASED IN</p>
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
            {/* Ticket-style dotted lines */}
            <div className="absolute top-8 left-0 right-0 border-t border-dashed border-white opacity-20 z-10"></div>
            <div className="absolute bottom-8 left-0 right-0 border-b border-dashed border-white opacity-20 z-10"></div>
            <div className="absolute left-8 top-0 bottom-0 border-l border-dashed border-white opacity-20 z-10"></div>
            <div className="absolute right-8 top-0 bottom-0 border-r border-dashed border-white opacity-20 z-10"></div>
            
            {/* Notebook holes on the left - realistic punched holes */}
            <div className="absolute left-3 top-3 bottom-3 flex flex-col justify-between z-30">
              <div className="w-3 h-3 rounded-full" style={{
                backgroundColor: 'transparent',
                boxShadow: 'inset 0 0 4px rgba(0,0,0,0.5)',
                background: 'radial-gradient(circle, #2a2a2a 20%, #4a4a4a 50%)'
              }}></div>
              <div className="w-3 h-3 rounded-full" style={{
                backgroundColor: '#4a4a4a',
                boxShadow: 'inset 0 0 4px rgba(0,0,0,0.9), inset 0 2px 2px rgba(0,0,0,0.7), 0 0 2px rgba(255,255,255,0.1)',
                background: 'radial-gradient(circle, #2a2a2a 20%, #4a4a4a 50%)'
              }}></div>
              <div className="w-3 h-3 rounded-full" style={{
                backgroundColor: '#4a4a4a',
                boxShadow: 'inset 0 0 4px rgba(0,0,0,0.9), inset 0 2px 2px rgba(0,0,0,0.7), 0 0 2px rgba(255,255,255,0.1)',
                background: 'radial-gradient(circle, #2a2a2a 20%, #4a4a4a 50%)'
              }}></div>
              <div className="w-3 h-3 rounded-full" style={{
                backgroundColor: '#4a4a4a',
                boxShadow: 'inset 0 0 4px rgba(0,0,0,0.9), inset 0 2px 2px rgba(0,0,0,0.7), 0 0 2px rgba(255,255,255,0.1)',
                background: 'radial-gradient(circle, #2a2a2a 20%, #4a4a4a 50%)'
              }}></div>
              <div className="w-3 h-3 rounded-full" style={{
                backgroundColor: '#4a4a4a',
                boxShadow: 'inset 0 0 4px rgba(0,0,0,0.9), inset 0 2px 2px rgba(0,0,0,0.7), 0 0 2px rgba(255,255,255,0.1)',
                background: 'radial-gradient(circle, #2a2a2a 20%, #4a4a4a 50%)'
              }}></div>
            </div>
            
            {/* 뒷면 헤더 */}
            <div className="absolute top-1 left-0 right-0 text-center z-20">
              <span className="text-xs uppercase jetbrains text-gray-400">ABOUT</span>
            </div>
            
            {/* 뒷면 가운데 */}
            <div className="flex items-center justify-center h-full z-20">
              <div className="text-center">
                <p className="text-6xl font-script italic text-gray-100 mb-4">
                  read more
                </p>
              </div>
            </div>
            
            {/* Footer */}
            <div className="absolute bottom-1 left-0 right-0 text-center z-20">
              <span className="text-xs uppercase jetbrains text-gray-400">ABOUT</span>
            </div>
            
            {/* 오른쪽 끝 문장 */}
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
        
        @media (max-width: 1024px) {
          .flip-card-inner {
            width: 700px;
            height: 400px;
          }
          
          h1, h2 {
            font-size: 2.5rem;
          }
          
          .text-3xl {
            font-size: 1.5rem;
          }
        }
        
        @media (max-width: 640px) {
          .flip-card-inner {
            width: 350px;
            height: 240px;
          }
          
          h1, h2 {
            font-size: 1.5rem;
          }
          
          .text-3xl {
            font-size: 1rem;
          }
          
          .text-xs {
            font-size: 0.6rem;
          }
        }

        /* 글래스모피즘 배경 스타일 추가 */
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
      `}</style>
    </section>
  );
};

export default AboutSection;