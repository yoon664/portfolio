import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { name: 'HOME', id: 'home' },
    { name: 'WORKS', id: 'works' },
    { name: 'ABOUT', id: 'about' },
    { name: 'CONTACT', id: 'contact' }
  ];

  return (
    <>
      {/* Main Header */}
      <header 
        className={`
          fixed top-0 left-0 w-full z-40 transition-all duration-300
          ${isScrolled 
            ? 'bg-black/90 backdrop-blur-sm border-b border-gray-800' 
            : 'bg-transparent'
          }
        `}
      >
        <nav className="flex justify-between items-center px-6 md:px-8 py-6">
          {/* Left - Home Link */}
          <div>
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm tracking-wider font-medium hover:text-gray-300 transition-colors duration-200"
            >
              HOME
            </button>
          </div>
          
          {/* Right - Navigation Menu (Desktop) */}
          <div className="hidden md:flex space-x-16 text-sm tracking-wider font-medium">
            {navigationItems.slice(1).map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-gray-300 transition-colors duration-200 relative group"
              >
                {item.name}
                {/* Hover underline effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
          >
            <span 
              className={`w-6 h-px bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span 
              className={`w-6 h-px bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span 
              className={`w-6 h-px bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          fixed inset-0 z-30 bg-black/95 backdrop-blur-sm md:hidden transition-all duration-300
          ${isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
          }
        `}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-2xl font-light tracking-wider hover:text-gray-300 transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Click outside to close mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;