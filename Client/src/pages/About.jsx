import React, { useEffect } from 'react';
import HeroAbout from '../components/layout/HeroAbout';
import MissionVission from '../components/layout/MissionVission';
import Team from '../components/layout/Team';
import OurProcess from '../components/layout/OurProcess';


const About = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <HeroAbout />
      <MissionVission />
      <OurProcess />
      {/* <Team /> */}
    </div>
  );
};

export default About;
