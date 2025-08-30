import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // 스크롤에 따른 헤더 스타일 변경
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 부드러운 스크롤 이동
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header 
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out
        ${isScrolled 
          ? 'bg-transparent py-4' 
          : 'bg-transparent py-4'
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-8 flex justify-center items-center">
        {/* Navigation Menu - Center */}
        <div className="flex items-center space-x-72 jetbrains ">
          <button
            onClick={() => scrollToSection('home')}
            className="text-base font-light uppercase transition-all duration-300 relative group overflow-hidden px-4 py-2"
          >
            <span className="block">Home</span>
            {/* 아래에서 위로 올라오는 배경 효과 */}
            <div className="absolute bottom-0 left-0 right-0 h-0 bg-white text-black overflow-hidden transition-all duration-400 ease-out group-hover:h-full">
              <span className="absolute bottom-0 left-0 right-0 block px-4 py-2 text-base font-light uppercase">Home</span>
            </div>
          </button>
          
          <button
            onClick={() => scrollToSection('works')}
            className="text-base font-light  uppercase transition-all duration-300 relative group overflow-hidden px-4 py-2"
          >
            <span className="block">Works</span>
            <div className="absolute bottom-0 left-0 right-0 h-0 bg-white text-black overflow-hidden transition-all duration-400 ease-out group-hover:h-full">
              <span className="absolute bottom-0 left-0 right-0 block px-4 py-2 text-base font-light  uppercase">Works</span>
            </div>
          </button>
          
          <button
            onClick={() => scrollToSection('about')}
            className="text-base font-light  uppercase transition-all duration-300 relative group overflow-hidden px-4 py-2"
          >
            <span className="block">About</span>
            <div className="absolute bottom-0 left-0 right-0 h-0 bg-white text-black overflow-hidden transition-all duration-400 ease-out group-hover:h-full">
              <span className="absolute bottom-0 left-0 right-0 block px-4 py-2 text-base font-light uppercase">About</span>
            </div>
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="text-base font-light uppercase transition-all duration-300 relative group overflow-hidden px-4 py-2"
          >
            <span className="block">Contact</span>
            <div className="absolute bottom-0 left-0 right-0 h-0 bg-white text-black overflow-hidden transition-all duration-400 ease-out group-hover:h-full">
              <span className="absolute bottom-0 left-0 right-0 block px-4 py-2 text-base font-light uppercase">Contact</span>
            </div>
          </button>
        </div>
      </nav>
      
    </header>
  );
};

export default Header;