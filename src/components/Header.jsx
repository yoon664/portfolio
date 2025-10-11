import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 메뉴가 열려 있을 때는 헤더를 숨기지 않음
      if (isMenuOpen) {
        setIsVisible(true);
        return;
      }

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
  }, [lastScrollY, isMenuOpen]); // isMenuOpen을 의존성 배열에 추가

  // 부드러운 스크롤 이동 및 메뉴 닫기
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // 링크 클릭 시 메뉴 닫기
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
          {/* 데스크탑 네비게이션 메뉴 - 중앙 (모바일에서 숨김) */}
          <div className="hidden md:flex items-center space-x-12 md:space-x-72">
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
        
        {/* 모바일 화면용 상단 바 (로고와 메뉴 버튼) */}
        <div className="md:hidden fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-out p-4 flex justify-between items-center"
             style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }}>
            <button
                onClick={() => scrollToSection('home')}
                className="text-white text-lg font-bold uppercase z-50">
                YOOEUNJI
            </button>
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white text-base font-light uppercase z-50">
                {isMenuOpen ? 'CLOSE' : 'MENU'}
            </button>
        </div>


      {/* 모바일 메뉴 오버레이 */}
      <div className={`fixed inset-0 bg-black z-40 transition-opacity duration-500 ease-out ${isMenuOpen ? 'opacity-95' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button onClick={() => scrollToSection('home')} className="text-white text-3xl font-light uppercase">HOME</button>
          <button onClick={() => scrollToSection('works')} className="text-white text-3xl font-light uppercase">WORKS</button>
          <button onClick={() => scrollToSection('about')} className="text-white text-3xl font-light uppercase">ABOUT</button>
          <button onClick={() => scrollToSection('contact')} className="text-white text-3xl font-light uppercase">CONTACT</button>
        </div>
      </div>
    </>
  );
};

export default Header;