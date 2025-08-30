import React, { useState, useEffect } from 'react';

const Progressbar = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [rulerProgressPosition, setRulerProgressPosition] = useState(0);

  // 섹션 데이터
  const sections = [
    { id: 'home', label: '', width: 180, isFirst: true },
    { id: 'works', label: 'Works', width: 140 },
    { id: 'about', label: 'About', width: 330 },
    { id: 'projects', label: 'Projects', width: 270 },
    { id: 'skills', label: 'Skills', width: 140 },
    { id: 'contact', label: 'Contact', width: 305 },
    { id: 'end', label: '', width: 140, isLast: true }
  ];

  // 누적 width 계산
  const cumulativeWidths = sections.reduce((acc, section, i) => {
    const prev = i === 0 ? 0 : acc[i - 1];
    acc.push(prev + section.width);
    return acc;
  }, []);
  const totalWidth = cumulativeWidths[cumulativeWidths.length - 1];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.pageYOffset;
      const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;

      // ruler 전체 위치 계산 (작은 이동 바)
      setRulerProgressPosition((progress / 100) * totalWidth);

      // 현재 활성 섹션 감지
      const sectionElements = sections.slice(0, -1).map(s => document.getElementById(s.id));
      let current = 0;
      sectionElements.forEach((el, idx) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            current = idx;
          }
        }
      });
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalWidth]);

  const scrollToSection = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[88]"
      style={{
        filter: 'invert()',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
      }}
    >
      <style jsx>{`
        .home-ruler-main-item-line {
          --ruler-width: 1px;
          --ruler-gap: 9px;
          --ruler-cl: rgba(86, 122, 139, 0.4);
        }
        .home-ruler-main-item-line-body {
          background-image: linear-gradient(90deg, var(--ruler-cl) var(--ruler-width), transparent var(--ruler-width));
          background-position: 0 0;
          background-repeat: repeat-x;
          background-size: calc(var(--ruler-width) + var(--ruler-gap)) 100%;
          height: 100%;
        }
        .home-ruler-main-item-line-head {
          background-image: linear-gradient(90deg, var(--ruler-cl) var(--ruler-width), transparent var(--ruler-width));
          background-repeat: no-repeat;
          background-size: calc(var(--ruler-width) + var(--ruler-gap)) 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          transition: width 0.3s ease-out;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-8 relative">
        {/* 작은 이동 바 */}
        <div
          className="absolute bottom-0 w-2 h-8 bg-white z-10"
          style={{ transform: `translateX(${rulerProgressPosition}px)`, transition: 'transform 0.2s ease-out' }}
        />

        {/* 눈금 컨테이너 */}
        <div className="flex items-end h-16 relative overflow-hidden">
          {sections.map((section, index) => {
            const isActive = index <= activeSection;
            const headWidth =
              index < activeSection
                ? '100%'
                : index === activeSection
                ? `${rulerProgressPosition - (cumulativeWidths[index - 1] || 0)}px`
                : '0px';

            return (
              <div
                key={section.id}
                className="relative flex items-end"
                style={{ width: `${section.width}px`, flexShrink: 0 }}
              >
                <div className="home-ruler-main-item-line w-full h-6 relative">
                  {!section.isFirst && (
                    <div className="home-ruler-main-item-line-head" style={{ width: headWidth }} />
                  )}
                  {!section.isLast && <div className="home-ruler-main-item-line-body absolute top-0 left-0 w-full" />}
                </div>

                {section.label && (
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium whitespace-nowrap transition-opacity duration-300 pointer-events-auto ${
                      activeSection === index ? 'opacity-100' : 'opacity-60'
                    }`}
                  >
                    {section.label}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
