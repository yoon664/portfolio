import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 스크롤 위치가 50px 이상일 때만 숨김/보임 로직 적용
      if (currentScrollY > 50) {
        setIsScrolled(true);
        
        // 아래로 스크롤: 헤더 숨김
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        }
        // 위로 스크롤: 헤더 보임
        else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    <>
      <header 
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out
          ${isScrolled 
            ? 'py-3' 
            : 'bg-transparent py-4'
          }
          ${isVisible 
            ? 'transform translate-y-0' 
            : 'transform -translate-y-full'
          }
        `}
      >
        <nav className="max-w-7xl mx-auto px-8 flex justify-center items-center">
          {/* Navigation Menu - Center */}
          <div className="flex items-center space-x-12 md:space-x-72">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white text-base font-light uppercase transition-all duration-300 relative group overflow-hidden px-4 py-2"
            >
              <span className="block">Home</span>
              <div className="absolute bottom-0 left-0 right-0 h-0 bg-white text-black overflow-hidden transition-all duration-400 ease-out group-hover:h-full">
                <span className="absolute bottom-0 left-0 right-0 block px-4 py-2 text-base font-light uppercase">Home</span>
              </div>
            </button>
            
            <button
              onClick={() => scrollToSection('works')}
              className="text-white text-base font-light uppercase transition-all duration-300 relative group overflow-hidden px-4 py-2"
            >
              <span className="block">Works</span>
              <div className="absolute bottom-0 left-0 right-0 h-0 bg-white text-black overflow-hidden transition-all duration-400 ease-out group-hover:h-full">
                <span className="absolute bottom-0 left-0 right-0 block px-4 py-2 text-base font-light uppercase">Works</span>
              </div>
            </button>
            
            <button
              onClick={() => scrollToSection('about')}
              className="text-white text-base font-light uppercase transition-all duration-300 relative group overflow-hidden px-4 py-2"
            >
              <span className="block">About</span>
              <div className="absolute bottom-0 left-0 right-0 h-0 bg-white text-black overflow-hidden transition-all duration-400 ease-out group-hover:h-full">
                <span className="absolute bottom-0 left-0 right-0 block px-4 py-2 text-base font-light uppercase">About</span>
              </div>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white text-base font-light uppercase transition-all duration-300 relative group overflow-hidden px-4 py-2"
            >
              <span className="block">Contact</span>
              <div className="absolute bottom-0 left-0 right-0 h-0 bg-white text-black overflow-hidden transition-all duration-400 ease-out group-hover:h-full">
                <span className="absolute bottom-0 left-0 right-0 block px-4 py-2 text-base font-light uppercase">Contact</span>
              </div>
            </button>
          </div>
        </nav>
      </header>

    </>
  );
};

export default Header;