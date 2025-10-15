import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const ProjectsSection = () => {
  const archiveItems = [
    { id: '01', image: 'img/san8.png', title: 'Pumpkin Pie', year: '2024', description: 'Modeling and texturing with faux oil painting texture using a bump map in Autodesk Maya.' },
    { id: '02', image: 'img/san9.png', title: 'Design System', year: '2024', description: 'A comprehensive design system for a fictional brand, including typography, color palette, and component library.' },
    { id: '03', image: '', title: 'Editorial Spread', year: '2023', description: 'A two-page magazine spread focusing on dynamic layout and typography.' },
    { id: '04', image: 'img/piku.png', title: 'Mobile App UI', year: '2024', description: 'User interface design for a productivity mobile application.' },
    { id: '05', image: 'img/miro.png', title: 'Brand Identity', year: '2023', description: 'Complete brand identity design for a local coffee shop.' },
    { id: '06', image: '', title: '3D Vector Illustration', year: '2025', description: '3d vector img' },
    { id: '07', image: 'img/ill2.png', title: '3D Vector Illustration', year: '2025', description: '3d vector img' },
    { id: '08', image: 'img/ill3.png', title: '3D Vector Illustration', year: '2025', description: '3d vector img' },
    { id: '09', image: 'img/ill4.png', title: '3D Vector Illustration', year: '2025', description: '3d vector img' },
    { id: '10', image: 'img/amio5.png', title: 'Packaging Design', year: '2024', description: 'Product packaging design for a line of organic snacks.' },
    { id: '11', image: 'img/ill5.png', title: 'Pixel art', year: '2025', description: 'A landscape digital painting created in Procreate.' },
    { id: '12', image: '', title: 'Pixel art', year: '2025', description: 'Graphic design for a limited edition t-shirt.' },
    { id: '13', image: 'img/ill7.png', title: 'Infographic', year: '2024', description: 'Data visualization and infographic design on environmental statistics.' },
    { id: '14', image: 'img/pig.png', title: '3D Model', year: '2023', description: 'A low-poly 3D model of a stylized animal character.' },
    { id: '15', image: '', title: 'Product Photography', year: '2024', description: 'Studio photography for a luxury watch brand.' },
    { id: '16', image: 'img/pho2.png', title: 'Portrait Photography', year: '2023', description: 'A series of black and white portraits.' },
    { id: '17', image: '', title: 'Architectural Photography', year: '2022', description: 'Capturing the details of modern architecture.' },
    { id: '18', image: 'img/pho3.png', title: 'Digital Artwork', year: '2024', description: 'Digital Artwork used by photoshap' },
    { id: '19', image: 'img/clean1.png', title: 'Website Redesign', year: '2023', description: 'A complete UX/UI redesign for an e-commerce website.' },
    { id: '20', image: 'img/clean2.png', title: 'Landing Page', year: '2024', description: 'Design and development of a high-conversion landing page.' },
    { id: '21', image: 'img/ill6.png', title: 'Pixel art', year: '2025', description: 'An animated logo reveal for a tech startup.' },
    { id: '22', image: 'img/ill1.png', title: '3D Vector Illustration', year: '2025', description: '3d vector img' },
    { id: '23', image: 'img/pho1.png', title: 'Book Cover Design', year: '2022', description: 'Cover design for a fantasy novel.' },
    { id: '24', image: '', title: 'Abstract Photography', year: '2024', description: 'Exploring textures and light through abstract photography.' },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    // 이미지가 없으면 모달을 안열리게
    if (!project.image) {
      return;
    }
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // 데스크탑 뷰에서 이미지가 있는 항목의 번호를 매기기 위한 카운터
  let imageCounter = 0;

  return (
    <>
      <section 
        id="projects"
        className="w-full min-h-screen bg-white flex flex-col overflow-hidden"
        style={{ backgroundColor: '#ffffff' }}
      >
        <header className="flex flex-col md:flex-row md:justify-between items-start p-8 pb-6">
          <div className="mb-1 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-light mb-4 md:mb-0" style={{ color: '#212121' }}>
              Archive
            </h1>
            <p className="text-sm jetbrains uppercase tracking-wide leading-relaxed md:hidden" style={{ color: '#212121' }}>
              A CURATED STASH OF PLAYFUL, BITE-SIZED CREATIONS<br />
              TOO SMALL FOR A PROJECT, BUT TOO GOOD TO KEEP HIDDEN.
            </p>
          </div>
          <div className="hidden md:block max-w-md text-left">
            <p className="text-sm jetbrains uppercase tracking-wide leading-relaxed" style={{ color: '#212121' }}>
              A CURATED STASH OF PLAYFUL, BITE-SIZED CREATIONS<br />
              TOO SMALL FOR A PROJECT, BUT TOO GOOD TO KEEP HIDDEN.
            </p>
          </div>
        </header>

        <div className="flex-1">

          {/* --- 모바일 버전 레이아웃 --- */}
          <div className="lg:hidden border-t border-dashed border-gray-400">
            <div className="grid grid-cols-3">
              {archiveItems
                .filter(item => item.image) // 이미지가 있는 항목만 필터링!!
                .slice(0, 12)
                .map((item, index) => ( 
                  <div 
                    key={item.id}
                    className={`relative overflow-hidden group p-4 border-r border-b border-dashed border-gray-400 ${item.image && 'cursor-pointer'}`}
                    onClick={() => handleProjectClick(item)}
                    tabIndex={0}
                  >
                    <div className="absolute top-3 left-3 z-10 bg-white px-0.5 py-0.5">
                      {/* index로 01,02 형식으로 번호 표시 */}
                      <span className="text-xs jetbrains" style={{ color: '#212121' }}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="w-full h-full aspect-square">
                      {item.image && (
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:rotate-2 transition-transform duration-300"/>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                ))}
            </div>
          </div>

          {/* --- 데스크탑 버전 레이아웃 --- */}
          <div className="hidden lg:block border-t border-dashed border-gray-400">
            <div className="grid grid-cols-8">
              {archiveItems.map((item) => {
                // 이미지가 있는 경우에만 카운터를 증가시킴
                if (item.image) {
                  imageCounter++;
                }
                
                return (
                  <div 
                    key={item.id}
                    className={`relative overflow-hidden group p-4 border-r border-b border-dashed border-gray-400 ${item.image && 'cursor-pointer'}`}
                    onClick={() => handleProjectClick(item)}
                    tabIndex={0}
                  >
                    <div className="absolute top-3 left-3 z-10 bg-white px-0.5 py-0.5">
                      <span className="text-xs jetbrains" style={{ color: '#212121' }}>
                        {/* 이미지가 있을 때만 번호를 표시 */}
                        {item.image ? String(imageCounter).padStart(2, '0') : ''}
                      </span>
                    </div>
                    <div className="w-full h-full aspect-square">
                      {item.image && (
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:rotate-2 transition-transform duration-300"/>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default ProjectsSection;