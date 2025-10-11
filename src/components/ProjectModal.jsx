import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  // project 데이터가 없으면 아무것도 렌더링하지 않음
  if (!project) return null;

  return (
    // 전체 화면을 덮는 고정 위치 컨테이너 (모달 배경)
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center p-16 animate-fade-in">
      {/* 닫기 버튼 */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-sm jetbrains uppercase tracking-wider text-gray-500 hover:text-black transition-colors"
      >
        Close
      </button>

      {/* 컨텐츠 영역 (2단 레이아웃) */}
      <div className="w-full h-full flex items-center gap-16">
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
        <div className="w-1/2 h-full flex items-center justify-center  p-4">
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