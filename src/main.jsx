import React from 'react';

// Layout Components
import Header from './components/Header';
import Progressbar from './components/Progressbar';

// Section Components
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

// Data
import { portfolioData, projectsData, skillsData, personalData } from './data';

const App = () => {
  return (
    <div className="bg-black text-white font-mono relative overflow-x-hidden">
      {/* Fixed Layout Components */}
      <Header />
      <Progressbar showPercentage={false} />
      
      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero with 3D elements */}
        <HeroSection />
        
        {/* Section 2: About with flip card resume */}
        <AboutSection personalData={personalData} />
        
        {/* Section 3: Portfolio works */}
        <PortfolioSection portfolioData={portfolioData} />
        
        {/* Section 4: School projects */}
        <ProjectsSection projectsData={projectsData} />
        
        {/* Section 5: Skills with horizontal scroll */}
        <SkillsSection skillsData={skillsData} />
        
        {/* Section 6: Contact */}
        <ContactSection personalData={personalData} />
      </main>
    </div>
  );
};

export default App;