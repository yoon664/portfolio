import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center p-4 sm:p-8 md:p-16 animate-fade-in">
      
      {/* --- 닫기 버튼 (수정 없음) --- */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8">
        <button
          onClick={onClose}
          className="relative group overflow-hidden px-4 py-2 text-sm jetbrains uppercase tracking-wider text-gray-500"
        >
          <span className="block">Close</span>
          <div className="absolute bottom-0 left-0 right-0 h-0 bg-black text-white overflow-hidden transition-all duration-300 ease-out group-hover:h-full">
            <span className="absolute bottom-0 left-0 right-0 block px-4 py-2">
              Close
            </span>
          </div>
        </button>
      </div>

      {/* --- 데스크탑 레이아웃 (md 사이즈 이상에서 보임) --- */}
      <div className="hidden md:flex w-full h-full items-center gap-16">
        {/* 왼쪽: 텍스트 정보 */}
        <div className="w-1/2 h-full flex flex-col justify-between py-8">
          <div>
            <h1 className="text-9xl font-thin text-gray-800">
              {project.id}
            </h1>
          </div>
          <div className="text-gray-800 jetbrains">
            <p className="text-sm uppercase">{project.title}</p>
            <p className="text-sm">{project.year}</p>
            <p className="text-sm mt-4 max-w-md uppercase">
              {project.description}
            </p>
          </div>
        </div>

        {/* 오른쪽: 이미지 */}
        <div className="w-1/2 h-full flex items-center justify-center p-4">
          <div className="w-full aspect-square relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* --- 모바일 레이아웃 --- */}
      <div className="md:hidden w-full h-full flex flex-col items-start justify-center text-left gap-6 overflow-y-auto py-16 px-4">
        {/* 1. 번호 */}
        <h1 className="text-7xl font-thin text-gray-800">{project.id}</h1>
        
        {/* 2. 이미지 */}
        <div className="w-full max-w-xs aspect-square relative my-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* 3. 텍스트 정보 */}
        <div className="text-gray-800 jetbrains">
          <p className="text-sm uppercase">{project.title}</p>
          <p className="text-sm">{project.year}</p>
          <p className="text-xs mt-4 max-w-sm uppercase">
            {project.description}
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default ProjectModal;