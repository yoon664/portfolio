import React, { useState, useEffect } from 'react';

const Progressbar = ({ 
  className = "",
  showPercentage = false,
  color = "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
  backgroundColor = "bg-gray-200 dark:bg-gray-800",
  height = "h-1",
  position = "fixed",
  animate = true 
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.pageYOffset;
      const progress = totalHeight > 0 ? (currentProgress / totalHeight) * 100 : 0;
      
      setScrollProgress(Math.min(progress, 100));
      setIsVisible(currentProgress > 100); // 100px 스크롤 후 표시
    };

    // 초기 스크롤 위치 체크
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <div 
        className={`
          ${position} bottom-0 left-0 w-full z-50 
          ${backgroundColor} 
          ${height}
          ${animate ? 'transition-opacity duration-300' : ''}
          ${isVisible ? 'opacity-100' : 'opacity-0'}
          ${className}
        `}
      >
        {/* Progress Fill */}
        <div 
          className={`
            ${height} 
            ${color}
            ${animate ? 'transition-all duration-150 ease-out' : ''}
            relative overflow-hidden
          `}
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Animated Shimmer Effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{
              animation: animate ? 'shimmer 2s infinite' : 'none',
              transform: 'skewX(-15deg)'
            }}
          />
        </div>
      </div>

      {/* Optional Percentage Display */}
      {showPercentage && isVisible && (
        <div 
          className={`
            ${position} bottom-4 right-4 z-50
            bg-black/80 text-white px-3 py-1 rounded-full text-sm font-mono
            ${animate ? 'transition-opacity duration-300' : ''}
          `}
        >
          {Math.round(scrollProgress)}%
        </div>
      )}

      {/* CSS Animation for Shimmer Effect */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          50% {
            transform: translateX(0%) skewX(-15deg);
          }
          100% {
            transform: translateX(100%) skewX(-15deg);
          }
        }
      `}</style>
    </>
  );
};

// Usage Examples:
export const ProgressbarExamples = () => {
  return (
    <div className="space-y-8 p-8">
      <h2 className="text-2xl font-bold">Progress Bar Examples</h2>
      
      {/* Default ComPsych Style */}
      <div>
        <h3 className="text-lg mb-2">Default ComPsych Style</h3>
        <Progressbar />
      </div>
      
      {/* With Percentage */}
      <div>
        <h3 className="text-lg mb-2">With Percentage Display</h3>
        <Progressbar showPercentage={true} />
      </div>
      
      {/* Custom Colors */}
      <div>
        <h3 className="text-lg mb-2">Custom Brand Colors</h3>
        <Progressbar 
          color="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"
          backgroundColor="bg-gray-100 dark:bg-gray-900"
        />
      </div>
      
      {/* Thick Version */}
      <div>
        <h3 className="text-lg mb-2">Thick Version</h3>
        <Progressbar 
          height="h-2"
          color="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"
        />
      </div>
      
      {/* Static Version (for testing) */}
      <div>
        <h3 className="text-lg mb-2">Static Version</h3>
        <Progressbar 
          position="relative"
          animate={false}
          className="mb-4"
        />
      </div>
    </div>
  );
};

export default Progressbar;