import React, { useEffect } from 'react';
import HeroProjects from '../components/layout/HeroProjects';
import ProjectGallery from '../components/layout/ProjectGallery';
import PortfolioComingSoon from '../components/layout/PortfolioComingSoon';

const Projects = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* <HeroProjects /> */}
      {/* <ProjectGallery /> */}
      <PortfolioComingSoon/>
    </div>
  );
};

export default Projects;
