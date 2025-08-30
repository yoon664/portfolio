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
          ? 'bg-black/80 backdrop-blur-md py-4' 
          : 'bg-transparent py-8'
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-8 flex justify-center items-center">
        {/* Navigation Menu - Center */}
        <div className="flex items-center space-x-12">
          <button
            onClick={() => scrollToSection('home')}
            className="text-sm font-light tracking-wider uppercase hover:text-gray-300 transition-all duration-300 relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          
          <button
            onClick={() => scrollToSection('works')}
            className="text-sm font-light tracking-wider uppercase hover:text-gray-300 transition-all duration-300 relative group"
          >
            Works
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-light tracking-wider uppercase hover:text-gray-300 transition-all duration-300 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-light tracking-wider uppercase hover:text-gray-300 transition-all duration-300 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </nav>
      
      {/* Bottom border line when scrolled */}
      <div 
        className={`
          absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent
          transition-opacity duration-500
          ${isScrolled ? 'opacity-100' : 'opacity-0'}
        `}
      />
    </header>
  );
};

export default Header;