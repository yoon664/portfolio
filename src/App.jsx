import React from 'react';
import './App.css'

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
import { personalData } from './data';

const App = () => {
  return (
    <div className="text-white font-mono relative overflow-x-hidden">
      <Header />
      <Progressbar showPercentage={false} />
      
      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero with 3D elements */}
        <HeroSection />
        
        {/* Section 2: About with flip card resume */}
        <AboutSection personalData={personalData} />
        
        {/* Section 3: Portfolio works */}
        <PortfolioSection />
        
        {/* Section 4: School projects */}
        <ProjectsSection />
        
        {/* Section 5: Skills with horizontal scroll */}
        <SkillsSection />
        
        {/* Section 6: Contact */}
        <ContactSection personalData={personalData} />
      </main>
    </div>
  );
};

export default App;