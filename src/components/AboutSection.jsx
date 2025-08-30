// AboutSection.jsx
import React from 'react';

const AboutSection = ({ personalData }) => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-400 relative">
      <div className="perspective-1000 w-[920px] h-[480px] group">
        <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer group-hover:rotate-y-180">
          
          {/* Front Side - Yellow Notebook */}
          <div className="flip-card-front absolute inset-0 backface-hidden bg-yellow-400 text-black shadow-2xl rounded-md relative overflow-hidden">
            {/* Notebook holes on the left */}
            <div className="absolute left-6 top-0 bottom-0 flex flex-col justify-evenly">
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
            </div>
            
            {/* Dotted vertical line */}
            <div className="absolute left-16 top-0 bottom-0 border-l border-dashed border-gray-600 opacity-30"></div>
            
            {/* Header section */}
            <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-8 text-xs uppercase tracking-widest">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-black rounded-sm"></div>
                <span>05</span>
                <span>ILLUSTRATION</span>
              </div>
              <span>ABOUT</span>
              <div className="w-4 h-4 bg-black rounded-sm"></div>
            </div>
            
            {/* Main Content Area */}
            <div className="flex h-full pt-16 pb-12">
              {/* Left side with rotating images */}
              <div className="w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center transform rotate-45">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform -rotate-45">
                      <span className="text-xs font-bold">IMG</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side with text content */}
              <div className="w-1/2 px-8 flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-6xl font-light leading-tight mb-2">
                    {personalData.name}
                  </h3>
                  <h4 className="text-6xl font-light leading-tight mb-6">
                    does
                  </h4>
                  
                  <div className="mb-8">
                    <p className="text-3xl italic font-script text-center">
                      creative design
                    </p>
                  </div>
                  
                  <div className="text-xs uppercase leading-relaxed tracking-wide">
                    <p>
                      I'M AN ENTHUSIASTIC AND MULTIFACETED VISUAL ARTIST, MOTION DESIGNER,<br/>
                      GRAPHIC DESIGNER, ILLUSTRATOR, AND PHOTOGRAPHER. PASSIONATE ABOUT PUSHING<br/>
                      CREATIVE BOUNDARIES, I CONSTANTLY SEEK TO EXPAND MY EXPERTISE AND COMBINE<br/>
                      SKILLS ACROSS VARIOUS MEDIUMS. I THRIVE ON PROBLEM-SOLVING AND EMBRACE<br/>
                      CHALLENGES WITH A PROACTIVE AND OPEN-MINDED APPROACH.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer section */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-8 text-xs">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-black rounded-sm"></div>
                <span>05 / 06</span>
                <div className="w-3 h-3 bg-black rounded-sm"></div>
              </div>
              <div className="flex items-center space-x-8">
                <span>CURRENTLY BASED IN</span>
                <span>SEOUL, KR</span>
                <span>37.5665° N, 126.9780° E</span>
              </div>
            </div>
            
            {/* Right edge text */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90">
              <span className="text-xs uppercase tracking-widest">PORTFOLIO WORKS</span>
            </div>
          </div>

          {/* Back Side - Black Notebook */}
          <div className="flip-card-back absolute inset-0 backface-hidden rotate-y-180 bg-gray-900 text-white shadow-2xl rounded-md relative overflow-hidden">
            {/* Notebook holes on the left */}
            <div className="absolute left-6 top-0 bottom-0 flex flex-col justify-evenly">
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            </div>
            
            {/* Dotted vertical line */}
            <div className="absolute left-16 top-0 bottom-0 border-l border-dashed border-gray-500 opacity-20"></div>
            
            {/* Header */}
            <div className="absolute top-4 left-0 right-0 text-center">
              <span className="text-xs uppercase tracking-widest text-gray-400">ABOUT</span>
            </div>
            
            {/* Main Content */}
            <div className="flex items-center justify-center h-full">
              <p className="text-5xl font-script italic text-gray-100">
                read more
              </p>
            </div>
            
            {/* Footer */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="text-xs uppercase tracking-widest text-gray-400">ABOUT</span>
            </div>
            
            {/* Right edge text */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90">
              <span className="text-xs uppercase tracking-widest text-gray-400">{personalData.name}.COM</span>
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
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }
        
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }
        
        .font-script {
          font-family: 'Biro Script reduced Regular', 'Brush Script MT', cursive;
        }
        
        .group:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        @media (max-width: 1024px) {
          .flip-card-inner {
            width: 600px;
            height: 320px;
          }
        }
        
        @media (max-width: 640px) {
          .flip-card-inner {
            width: 350px;
            height: 240px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;