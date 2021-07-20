import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import HeroSection from '../components/HeroSection';

export default function Home() {
  console.log(`The projects are hosted on Heroku free Tier, 
  and so they are currently down due to inactivity.`)
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
}
