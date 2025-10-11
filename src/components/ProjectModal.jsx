import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center p-16 animate-fade-in">
      <div className="absolute top-8 right-8">

        <button
          onClick={onClose}
          className="relative group overflow-hidden px-4 py-2 text-sm jetbrains uppercase tracking-wider text-gray-500"
        >
          {/* 기본 상태 텍스트 */}
          <span className="block">Close</span>

          {/* 호버 효과 */}
          <div className="absolute bottom-0 left-0 right-0 h-0 bg-black text-white overflow-hidden transition-all duration-300 ease-out group-hover:h-full">
            <span className="absolute bottom-0 left-0 right-0 block px-4 py-2">
              Close
            </span>
          </div>
        </button>
      </div>

      {/* 컨텐츠 영역 (2단 레이아웃) */}
      <div className="w-full h-full flex items-center gap-16">
        {/* 왼쪽- 텍스트 정보 */}
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

        {/* 오른쪽- 이미지 */}
        <div className="w-1/2 h-full flex items-center justify-center p-4">
          <img
            src={project.image}
            alt={project.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;