import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

// 섹션 데이터: 각 섹션 너비는 이제 고정 px이 아닌, 서로의 '비율'을 나타냅니다.
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

// 커스텀 훅: 스크롤 진행률을 0과 1 사이의 값으로 계산
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

  // 모든 섹션의 너비 합계를 '전체 비율'로 사용
  const totalProportionalWidth = sections.reduce((sum, section) => sum + section.width, 0);

  return (
    <div className="progress-ruler-container">
      <div className="progress-ruler-wrapper">
        {/* 작은 이동 바 */}
        <div
          className="progress-indicator"
          // translateX 값을 scrollProgress(0~1)와 100vw(전체 화면 너비)를 곱한 값으로 설정
          style={{ transform: `translateX(${scrollProgress * 100}vw)` }}
        />

        {/* 눈금자 섹션들 */}
        <div className="ruler-main">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="ruler-section"
              // 각 섹션의 너비를 전체 비율 대비 %로 설정
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