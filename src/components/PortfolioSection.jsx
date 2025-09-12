import React from 'react';

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('featured-work-01');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // 3D Asset 이미지들
  const assets = [
    { id: 1, color: 'bg-slate-500', text: '3D Asset 1' },
    { id: 2, color: 'bg-amber-600', text: '3D Asset 2' },
    { id: 3, color: 'bg-emerald-600', text: '3D Asset 3' },
    { id: 4, color: 'bg-yellow-600', text: '3D Asset 4' },
    { id: 5, color: 'bg-orange-600', text: '3D Asset 5' },
    { id: 6, color: 'bg-slate-600', text: '3D Asset 6' },
    { id: 7, color: 'bg-gray-500', text: '3D Asset 7' },
    { id: 8, color: 'bg-green-700', text: '3D Asset 8' },
  ];

  return (
    <section 
      id="featured-work-01"
      className={`
        max-w-7xl mx-auto px-8 py-16 transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      {/* Header */}
      <header className="flex justify-between items-center mb-16 pb-6 border-b border-gray-300">
        <h2 className="text-sm font-medium text-gray-600 tracking-wider jetbrains">
          FEATURED WORK 01
        </h2>
        <button className="bg-black text-white px-6 py-3 text-xs font-medium tracking-wider uppercase hover:bg-gray-800 transition-colors duration-300 group">
          <span className="flex items-center gap-2">
            SEE ALL WORKS 
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </button>
      </header>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-12">
        {/* Left Content */}
        <div className="lg:col-span-8 flex flex-col">
          {/* Project Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-900 mb-12 max-w-4xl">
            Into the Abyss: 3D Character &<br />
            Environment Animation
          </h1>
          
          {/* Main Image */}
          <div className="mb-8 group overflow-hidden rounded-sm">
            <img 
              src="https://framerusercontent.com/images/aQ3NO2opb3CmbDE4Zp5zaThmk.webp" 
              alt="3D Deep-Sea Environment" 
              className="w-full h-96 md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          
          {/* Project Description */}
          <div className="max-w-lg">
            <p className="text-sm text-gray-600 leading-relaxed mb-8 tracking-wide jetbrains uppercase">
              DEVELOPED A 3D ANIMATED CHARACTER AND ENVIRONMENT WITH A DEEP-SEA DIVER THEME, 
              EXECUTING THE FULL 3D ANIMATION PIPELINE, INCLUDING CONCEPT DEVELOPMENT, MODELING, 
              TEXTURING, RIGGING, AND ANIMATION.
            </p>
            <button className="text-gray-900 text-xs font-medium tracking-wider uppercase hover:text-black transition-colors duration-300 group jetbrains">
              <span className="flex items-center gap-2">
                VIEW PROJECT 
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {/* Project Meta */}
          <div className="text-right lg:text-right text-left">
            <div className="text-2xl font-medium text-gray-900 mb-2 jetbrains">2025</div>
            <div className="text-xs text-gray-600 tracking-wider uppercase mb-6 jetbrains">
              3D TECH WORKS
            </div>
            <div className="text-xs text-gray-400 leading-relaxed tracking-wide uppercase jetbrains">
              3D, CHARACTER RIGGING, TEXTURING, 3D ANIMATION
            </div>
          </div>

          {/* Asset Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {assets.map((asset, index) => (
              <div 
                key={asset.id}
                className={`
                  h-28 rounded-sm overflow-hidden group cursor-pointer
                  transform transition-all duration-500 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`
                  w-full h-full ${asset.color} flex items-center justify-center 
                  group-hover:scale-110 transition-transform duration-500 ease-out
                `}>
                  <span className="text-white text-xs font-medium jetbrains">
                    {asset.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8"></div>
        
        {/* Detail Object */}
        <div className="lg:col-span-3 group overflow-hidden rounded-sm">
          <div className="w-full h-72 bg-slate-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
            <span className="text-white text-sm font-medium jetbrains">
              Detail Object
            </span>
          </div>
        </div>
        
        {/* Site Credit */}
        <div className="lg:col-span-1 flex lg:justify-center justify-start">
          <div className="lg:transform lg:rotate-90 lg:origin-center lg:whitespace-nowrap">
            <span className="text-xs text-gray-400 tracking-wider jetbrains">
              W. Site of the Day
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;