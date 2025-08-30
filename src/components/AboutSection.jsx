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
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-400 relative">
      <div className="perspective-1000 w-[920px] h-[480px] group">
        <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer group-hover:rotate-x-180">
          
          {/* Front Side - Yellow Notebook */}
          <div className="flip-card-front absolute inset-0 backface-hidden bg-yellow-400 text-black shadow-2xl rounded-md relative overflow-hidden">
            {/* Background with notebook texture */}
            <div className="absolute inset-0 bg-yellow-400"></div>
            
            {/* 카드 앞면 점선 */}
            <div className="absolute top-8 left-0 right-0 border-t border-dashed border-gray-600 opacity-30 z-10"></div>
            <div className="absolute bottom-8 left-0 right-0 border-b border-dashed border-gray-600 opacity-30 z-10"></div>
            <div className="absolute right-8 top-0 bottom-0 border-r border-dashed border-gray-600 opacity-30 z-10"></div>
            <div className="absolute left-1/3 top-0 bottom-0 border-l border-dashed border-gray-600 opacity-30 z-10"></div>
            <div className="absolute left-8 top-0 bottom-0 border-l border-dashed border-gray-600 opacity-30 z-10"></div>
            
            {/* Notebook holes on the left - realistic punched holes */}
            <div className="absolute left-6 top-0 bottom-0 flex flex-col justify-evenly z-30">
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
            
            {/* Header section with squares */}
            <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-6 text-xs uppercase jetbrains z-20">
              <div className="flex items-center space-x-2">
                <span>{current.number}</span>
                <span className="ml-4">{current.category}</span>
              </div>
            </div>
            
            {/* Left side - placeholder for rotating images (1/3 of width) */}
            <div className="absolute left-20 top-16 bottom-20 w-1/3 z-10">
              {/* This space is reserved for rotating images to be added later */}
            </div>
            
            {/* Left bottom section with slide counter */}
            <div className="absolute left-20 bottom-4 z-20">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-black"></div>
                <span className="text-xs jetbrains">{current.number} / 06</span>
                <div className="w-3 h-3 bg-black"></div>
              </div>
            </div>
            
            {/* Main content area (right 2/3) */}
            <div className="absolute left-1/3 right-0 top-0 bottom-0 flex flex-col justify-center z-20 px-8">
              
              {/* Top section with ABOUT label */}
              <div className="flex items-center justify-center mb-7">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-black"></div>
                  <span className="text-xs uppercase jetbrains text-center">ABOUT</span>
                  <div className="w-3 h-3 bg-black"></div>
                </div>
              </div>
              
              {/* Main title section */}
              <div className="text-left">
                <h1 className="text-6xl font-light leading-none " style={{fontFamily: '"Lock Serif Light", serif', fontSize: '80px', lineHeight: '80px'}}>
                  Yoo Eunji
                </h1>
                <h2 className="text-6xl font-light leading-none" style={{fontFamily: '"Lock Serif Light", serif', fontSize: '80px', lineHeight: '80px'}}>
                  does
                </h2>
              </div>
              <div className="absolute top-52 left-0 right-0 border-b border-dashed border-gray-600 opacity-30 z-10"></div>
              
              {/* Navigation section with arrows and center text */}
              <div className="flex items-center justify-center mb-5">
                <div className="flex items-center space-x-8">
                  <span className="text-lg font-medium">&lt;</span>
                  
                  <div className="text-center">
                    <p className="text-3xl italic font-script" style={{fontFamily: '"Biro Script reduced Regular", cursive', fontSize: '45px', lineHeight: '40px'}}>
                      {current.work}
                    </p>
                  </div>
                  
                  <span className="text-lg font-medium">&gt;</span>
                </div>
              </div>
              <div className="absolute bottom-52 left-0 right-0 border-b border-dashed border-gray-600 opacity-30 z-10"></div>
              {/* Description text */}
              <div className="text-sm leading-relaxed jetbrains px-4">
                <p className="text-left">
                  I'm an enthusiastic and multifaceted visual artist, motion designer, graphic designer, illustrator, and photographer. Passionate about pushing creative boundaries, I constantly seek to expand my expertise and combine skills across various mediums. 
                  I thrive on problem-solving and embrace challenges WITH A PROACTIVE AND OPEN-MINDED APPROACH.
                </p>
              </div>
              
              {/* 앞장 바닥 */}
              <div className="text-xs bottom-1 text-center space-y-1 jetbrains">
                <p className="uppercase">CURRENTLY BASED IN</p>
                <p className="font-medium">SAVANNAH, GA</p>
                <p>32.0809° N, 81.0912° W</p>
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
            <div className="absolute left-6 top-0 bottom-0 flex flex-col justify-evenly z-30">
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
      `}</style>
    </section>
  );
};

export default AboutSection;