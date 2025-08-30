// AboutSection.jsx
import React, { useState, useEffect } from 'react';

const AboutSection = ({ personalData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slideData = [
    { number: '01', category: 'BRANDING', work: 'design' },
    { number: '02', category: 'MOTION', work: 'photo' },
    { number: '03', category: 'ILLUSTRATION', work: 'illustration' },
    { number: '04', category: 'EDITORIAL', work: 'design' }
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
          <div className="flip-card-front absolute inset-0 backface-hidden bg-[#f6e24a] text-black shadow-2xl rounded-md relative overflow-hidden">
            {/* Background with notebook texture */}
            <div className="absolute inset-0 bg-[#f6e24a]"></div>
            
            {/* Ticket-style dotted lines */}
            {/* Top border */}
            <div className="absolute top-0 left-0 right-0 border-t border-dashed border-gray-600 opacity-30 z-10"></div>
            {/* Bottom border */}
            <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-600 opacity-30 z-10"></div>
            {/* Left border */}
            <div className="absolute left-0 top-0 bottom-0 border-l border-dashed border-gray-600 opacity-30 z-10"></div>
            {/* Right border */}
            <div className="absolute right-0 top-0 bottom-0 border-r border-dashed border-gray-600 opacity-30 z-10"></div>
            {/* Vertical divider between left and right sections */}
            <div className="absolute left-1/3 top-0 bottom-0 border-l border-dashed border-gray-600 opacity-30 z-10"></div>
            {/* Left margin line */}
            <div className="absolute left-16 top-0 bottom-0 border-l border-dashed border-gray-600 opacity-30 z-10"></div>
            
            {/* Notebook holes on the left - actual holes (transparent) */}
            <div className="absolute left-6 top-0 bottom-0 flex flex-col justify-evenly z-30">
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.3)', background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.1) 42%)'}}></div>
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.3)', background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.1) 42%)'}}></div>
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.3)', background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.1) 42%)'}}></div>
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.3)', background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.1) 42%)'}}></div>
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.3)', background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.1) 42%)'}}></div>
            </div>
            
            {/* 네모네모 */}
            <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-6 text-xs uppercase tracking-widest z-20">
              <div className="flex items-center space-x-2">
                <span>{current.number}</span>
                <span className="ml-4">{current.category}</span>
              </div>
              <span>ABOUT</span>
              <div className="w-3 h-3 bg-black"></div>
            </div>
            
            {/* Left side - placeholder for rotating images (1/3 of width) */}
            <div className="absolute left-20 top-16 bottom-20 w-1/3 z-10">
              {/* This space is reserved for rotating images to be added later */}
            </div>
            
            {/* Left bottom section with slide counter */}
            <div className="absolute left-20 bottom-4 z-20">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-black"></div>
                <span className="text-xs">{current.number} / 06</span>
                <div className="w-3 h-3 bg-black"></div>
              </div>
            </div>
            
            {/* Main content area (right 2/3) */}
            <div className="absolute left-1/3 right-8 top-16 bottom-16 flex flex-col justify-center z-20 pl-8">
              {/* Top section with black squares */}
              <div className="flex justify-between items-center mb-8">
                <div className="text-xs text-center">
                  <div className="w-3 h-3 bg-black mx-auto mb-1"></div>
                  <span>ABOUT</span>
                  <div className="w-3 h-3 bg-black mx-auto mt-1"></div>
                </div>
                <div className="w-3 h-3 bg-black"></div>
              </div>
              
              {/* Main title */}
              <div className="mb-8">
                <h1 className="text-5xl font-light leading-tight mb-2" style={{fontFamily: 'serif'}}>
                  Wildy Riftian
                </h1>
                <h2 className="text-5xl font-light leading-tight mb-8" style={{fontFamily: 'serif'}}>
                  does
                </h2>
                
                {/* Horizontal dotted line after title */}
                <div className="border-b border-dashed border-gray-600 opacity-30 mb-8"></div>
                
                {/* Navigation arrows and center text */}
                <div className="flex items-center justify-center space-x-8 mb-8">
           
                  <div className="flex items-center space-x-6">
                    <span className="text-2xl">&lt;</span>
                    <div className="text-center">
                  
                      <p className="text-3xl italic font-script">{current.work}</p>
                    </div>
                    <span className="text-2xl">&gt;</span>
                  </div>

                </div>
                
                {/* Horizontal dotted line before description */}
                <div className="border-b border-dashed border-gray-600 opacity-30 mb-8"></div>
                
                {/* Description text */}
                <div className="text-xs leading-relaxed tracking-wide">
                  <p>
                    I'm an enthusiastic and multifaceted visual artist, motion designer, 
                    graphic designer, illustrator, and photographer. Passionate about pushing 
                    creative boundaries, I constantly seek to expand my expertise and combine 
                    skills across various mediums. I thrive on problem-solving and embrace 
                    challenges WITH A PROACTIVE AND OPEN-MINDED APPROACH.
                  </p>
                </div>
              </div>
              
              {/* Bottom location info */}
              <div className="text-xs text-center space-y-1">
                <p>CURRENTLY BASED IN</p>
                <p>SAVANNAH, GA</p>
                <p>32.0809° N, 81.0912° W</p>
              </div>
            </div>
            
            {/* Right edge text */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 z-20">
              <span className="text-xs uppercase tracking-widest">WILDYRIFTIANWORKS</span>
            </div>
          </div>

          {/* Back Side - Dark Notebook */}
          <div className="flip-card-back absolute inset-0 backface-hidden rotate-x-180 bg-gray-800 text-white shadow-2xl rounded-md relative overflow-hidden">
            {/* Ticket-style dotted lines */}
            <div className="absolute top-0 left-0 right-0 border-t border-dashed border-gray-500 opacity-20 z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-500 opacity-20 z-10"></div>
            <div className="absolute left-0 top-0 bottom-0 border-l border-dashed border-gray-500 opacity-20 z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 border-r border-dashed border-gray-500 opacity-20 z-10"></div>
            <div className="absolute left-16 top-0 bottom-0 border-l border-dashed border-gray-500 opacity-20 z-10"></div>
            
            {/* Notebook holes on the left - actual holes (transparent) */}
            <div className="absolute left-6 top-0 bottom-0 flex flex-col justify-evenly z-30">
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.3)', background: 'radial-gradient(circle, transparent 40%, rgba(255,255,255,0.1) 42%)'}}></div>
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.3)', background: 'radial-gradient(circle, transparent 40%, rgba(255,255,255,0.1) 42%)'}}></div>
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.3)', background: 'radial-gradient(circle, transparent 40%, rgba(255,255,255,0.1) 42%)'}}></div>
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.3)', background: 'radial-gradient(circle, transparent 40%, rgba(255,255,255,0.1) 42%)'}}></div>
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.3)', background: 'radial-gradient(circle, transparent 40%, rgba(255,255,255,0.1) 42%)'}}></div>
            </div>
            
            {/* Header */}
            <div className="absolute top-8 left-0 right-0 text-center z-20">
              <span className="text-xs uppercase tracking-widest text-gray-400">ABOUT</span>
            </div>
            
            {/* Main Content */}
            <div className="flex items-center justify-center h-full z-20">
              <div className="text-center">
                <p className="text-5xl font-script italic text-gray-100 mb-4">
                  read more
                </p>
              </div>
            </div>
            
            {/* Footer */}
            <div className="absolute bottom-8 left-0 right-0 text-center z-20">
              <span className="text-xs uppercase tracking-widest text-gray-400">ABOUT</span>
            </div>
            
            {/* Right edge text */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 z-20">
              <span className="text-xs uppercase tracking-widest text-gray-400">WILDYRIFTIAN.COM</span>
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