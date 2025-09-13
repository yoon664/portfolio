import React from 'react';

const ProjectsSection = () => {
  // Archive 프로젝트 데이터 (이미지는 placeholder, 실제 이미지로 교체 가능)
  const archiveItems = [
    { id: '01', image: '/img/sanrio1.png', title: 'Design' },
    { id: '02', image: '/img/sanrio3.png', title: 'Design' },
    { id: '03', image: '/img/sanriogif.gif', title: 'Design' },
    { id: '04', image: '/img/sanrio1.png', title: 'Design' },
    { id: '05', image: '/img/sanrio3.png', title: 'Design' },
    { id: '06', image: '/img/ill1.png', title: 'Design' },
    { id: '07', image: '/img/ill2.png', title: 'Design' },
    { id: '08', image: '/img/ill3.png', title: 'Design' },
    { id: '09', image: '/img/ill4.png', title: 'Design' },
    { id: '10', image: '/img/sanrio1.png', title: 'Design' },
    { id: '11', image: '/img/ill5.png', title: 'Design' },
    { id: '12', image: '/img/ill6.png', title: 'Design' },
    { id: '13', image: '/img/ill7.png', title: 'Design' },
    { id: '14', image: '/img/sanrio3.png', title: 'Design' },
    { id: '15', image: '/img/pho1.png', title: 'Design' },
    { id: '16', image: '/img/pho2.png', title: 'Design' },
    { id: '17', image: '/img/sanrio3.png', title: 'Design' },
    { id: '18', image: '/img/pho3.png', title: 'Design' },
    { id: '19', image: '/img/sanrio1.png', title: 'Design' },
    { id: '20', image: '/img/clean1.png', title: 'Design' },
    { id: '21', image: '/img/clean2.png', title: 'Design' },
    { id: '22', image: '/img/sanrio1.png', title: 'Design' },
    { id: '23', image: '/img/sanrio3.png', title: 'Design' },
  ];

  return (
    <section 
      id="projects"
      className="w-full h-screen bg-white flex flex-col overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Header */}
      <header className="flex justify-between items-start p-8 pb-6">
        <div>
          <h1 className="text-5xl md:text-6xl font-light" style={{ color: '#212121' }}>
            Archive
          </h1>
        </div>
        
        <div className="max-w-md text-left">
          <p className="text-sm jetbrains uppercase tracking-wide leading-relaxed" style={{ color: '#212121' }}>
            A CURATED STASH OF PLAYFUL, BITE-SIZED CREATIONS<br />
            TOO SMALL FOR A PROJECT, BUT TOO GOOD TO KEEP HIDDEN.
          </p>
        </div>
      </header>

      {/* Main Grid */}
      <div className="flex-1 p-8 relative">
        {/* Grid lines background */}
        <div className="absolute inset-8 pointer-events-none">
          {/* Vertical lines */}
          {[1, 2, 3, 4, 5, 6, 7].map(i => (
            <div 
              key={`v-${i}`} 
              className="absolute top-0 bottom-0 border-l border-dashed border-gray-300"
              style={{ left: `${(i / 8) * 100}%` }}
            ></div>
          ))}
          {/* Horizontal lines - for rows */}
          {[1, 2].map(i => (
            <div 
              key={`h-${i}`} 
              className="absolute left-0 right-0 border-t border-dashed border-gray-300"
              style={{ top: `${(i / 3) * 100}%` }}
            ></div>
          ))}
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-8 gap-8 h-full relative" style={{ gridTemplateColumns: 'repeat(8, minmax(50px, 1fr))' }}>
          {/* Grid Items */}
          {archiveItems.map((item, index) => (
            <div 
              key={item.id}
              className="relative overflow-hidden group cursor-pointer"
              tabIndex={0}
            >
              {/* Number with white background */}
              <div className="absolute top-3 left-3 z-10 bg-white px-0.5 py-0.5">
                <span className="text-xs jetbrains" style={{ color: '#212121' }}>
                  {item.id}
                </span>
              </div>
              
              {/* Image */}
              <div className="w-full h-full aspect-square">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:rotate-2 transition-transform duration-300"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>
          ))}

          {/* SEE ALL Button */}
          <div className="flex items-center justify-center">
            <button className="text-center">
              <span className="text-xs jetbrains tracking-wider" style={{ color: '#212121' }}>
                SEE ALL →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;