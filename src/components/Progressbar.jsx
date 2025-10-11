import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

const sections = [
  { id: 'home', width: 180 },
  { id: 'brand-strategy', width: 140 },
  { id: 'tone-of-voice', width: 330 },
  { id: 'logo', width: 270 },
  { id: 'typo', width: 140 },
  { id: 'photo', width: 305 },
  { id: 'color', width: 140 },
  { id: 'another-color', width: 140 },
];

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(totalHeight > 0 ? window.scrollY / totalHeight : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};

const ProgressBar = () => {
  const scrollProgress = useScrollProgress();
  const totalProportionalWidth = sections.reduce((sum, section) => sum + section.width, 0);
  const indicatorWidth = 60; // CSS에 정의된 이동 바의 너비

  return (
    // ▼▼▼ 여기에 hidden md:block 클래스를 추가합니다 ▼▼▼
    <div className="progress-ruler-container hidden md:block">
      <div className="progress-ruler-wrapper">
        {/* 작은 이동 바 */}
        <div
          className="progress-indicator"
          // left와 transform을 함께 사용하여 오차 없는 위치 계산!~!~!
          style={{
            left: `${scrollProgress * 100}%`,
            transform: `translateX(-${scrollProgress * indicatorWidth}px)`
          }}
        />

        {/* 눈금자 섹션들 */}
        <div className="ruler-main">
          {sections.map((section) => (
            <div
              key={section.id}
              className="ruler-section"
              style={{ width: `${(section.width / totalProportionalWidth) * 100}%` }}
            >
              <div className="ruler-line">
                <div className="ruler-line-body" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;