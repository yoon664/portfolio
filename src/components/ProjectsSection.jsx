import React, { useState } from 'react';
import ProjectModal from './ProjectModal'; // 방금 만든 모달 컴포넌트를 import 합니다.

const ProjectsSection = () => {
  const archiveItems = [
    { id: '01', image: '/img/san8.png', title: 'Pumpkin Pie', year: '2024', description: 'Modeling and texturing with faux oil painting texture using a bump map in Autodesk Maya.' },
    { id: '02', image: '/img/san9.png', title: 'Design System', year: '2024', description: 'A comprehensive design system for a fictional brand, including typography, color palette, and component library.' },
    { id: '03', image: '/img/null.jpg', title: 'Editorial Spread', year: '2023', description: 'A two-page magazine spread focusing on dynamic layout and typography.' },
    { id: '04', image: '/img/piku.png', title: 'Mobile App UI', year: '2024', description: 'User interface design for a productivity mobile application.' },
    { id: '05', image: '/img/miro.png', title: 'Brand Identity', year: '2023', description: 'Complete brand identity design for a local coffee shop.' },
    { id: '06', image: '/img/ill1.png', title: 'Vector Illustration', year: '2022', description: 'A series of detailed vector illustrations for a children\'s book.' },
    { id: '07', image: '/img/ill2.png', title: 'Iconography Set', year: '2023', description: 'A custom set of 30 icons designed for a web application.' },
    { id: '08', image: '/img/ill3.png', title: 'Poster Design', year: '2024', description: 'Promotional poster design for a music festival.' },
    { id: '09', image: '/img/ill4.png', title: 'Character Sketch', year: '2022', description: 'Initial character sketches and concept art for an animation project.' },
    { id: '10', image: '/img/amio5.png', title: 'Packaging Design', year: '2024', description: 'Product packaging design for a line of organic snacks.' },
    { id: '11', image: '/img/ill5.png', title: 'Digital Painting', year: '2023', description: 'A landscape digital painting created in Procreate.' },
    { id: '12', image: '/img/ill6.png', title: 'T-Shirt Graphic', year: '2022', description: 'Graphic design for a limited edition t-shirt.' },
    { id: '13', image: '/img/ill7.png', title: 'Infographic', year: '2024', description: 'Data visualization and infographic design on environmental statistics.' },
    { id: '14', image: '/img/pig.png', title: '3D Model', year: '2023', description: 'A low-poly 3D model of a stylized animal character.' },
    { id: '15', image: '/img/pho1.png', title: 'Product Photography', year: '2024', description: 'Studio photography for a luxury watch brand.' },
    { id: '16', image: '/img/pho2.png', title: 'Portrait Photography', year: '2023', description: 'A series of black and white portraits.' },
    { id: '17', image: '/img/null.jpg', title: 'Architectural Photography', year: '2022', description: 'Capturing the details of modern architecture.' },
    { id: '18', image: '/img/pho3.png', title: 'Food Photography', year: '2024', description: 'Stylized food photography for a restaurant menu.' },
    { id: '19', image: '/img/clean1.png', title: 'Website Redesign', year: '2023', description: 'A complete UX/UI redesign for an e-commerce website.' },
    { id: '20', image: '/img/clean2.png', title: 'Landing Page', year: '2024', description: 'Design and development of a high-conversion landing page.' },
    { id: '21', image: '/img/null.jpg', title: 'Motion Graphics', year: '2023', description: 'An animated logo reveal for a tech startup.' },
    { id: '22', image: '/img/null.jpg', title: 'Social Media Campaign', year: '2024', description: 'Visual assets for a social media marketing campaign.' },
    { id: '23', image: '/img/null.jpg', title: 'Book Cover Design', year: '2022', description: 'Cover design for a fantasy novel.' },
    { id: '24', image: '/img/null.jpg', title: 'Abstract Photography', year: '2024', description: 'Exploring textures and light through abstract photography.' },
  ];

  // 팝업 상태 관리를 위한 state
  const [selectedProject, setSelectedProject] = useState(null);

  // 이미지 클릭 시 선택된 프로젝트 정보를 state에 저장하는 함수
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // 팝업을 닫는 함수
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section 
        id="projects"
        className="w-full min-h-screen bg-white flex flex-col overflow-hidden"
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
        <div className="flex-1 p-8">
          <div className="grid grid-cols-8 gap-8 h-full">
            {archiveItems.map((item) => (
              // 각 아이템에 onClick 이벤트 핸들러 추가
              <div 
                key={item.id}
                className="relative overflow-hidden group cursor-pointer"
                onClick={() => handleProjectClick(item)}
                tabIndex={0}
              >
                <div className="absolute top-3 left-3 z-10 bg-white px-0.5 py-0.5">
                  <span className="text-xs jetbrains" style={{ color: '#212121' }}>
                    {item.id}
                  </span>
                </div>
                <div className="w-full h-full aspect-square">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:rotate-2 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* selectedProject가 있을 때만 ProjectModal을 렌더링 */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default ProjectsSection;