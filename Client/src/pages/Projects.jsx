import React from 'react';
import HeroProjects from '../components/layout/HeroProjects';
import ProjectGallery from '../components/layout/ProjectGallery';

const Projects = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <HeroProjects />
      <ProjectGallery />
    </div>
  );
};

export default Projects;
