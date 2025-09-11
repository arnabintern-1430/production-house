import React, { useEffect } from 'react';
import HeroHeader from "../components/layout/HeroHeader";
import Testimonials from "../components/layout/Testimonials";

import Footer from "../components/layout/Footer";
import AboutInfo from "../components/layout/AboutInfo";
import ContactForm from '../components/layout/ContactForm';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-black">
      <HeroHeader />
      <Testimonials />
      <AboutInfo />
      <ContactForm />
    </div>
  );
};

export default Home;
