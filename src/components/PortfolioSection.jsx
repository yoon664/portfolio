// AboutSection.jsx
import React from 'react';

const AboutSection = ({ personalData }) => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">ABOUT SECTION</h2>
        <p className="text-gray-300">소개 섹션이 여기에 들어갑니다.</p>
      </div>
    </section>
  );
};

export default AboutSection;