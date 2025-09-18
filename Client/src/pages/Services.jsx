import React, { useEffect } from 'react';
import HeroServices from '../components/layout/HeroServices';
import ServiceList from '../components/layout/ServiceList';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <HeroServices />
      <ServiceList />
    </div>
  );
};

export default Services;
