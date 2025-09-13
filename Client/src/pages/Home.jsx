import React, { useEffect } from "react";
import HeroHeader from "../components/layout/HeroHeader";
import Testimonials from "../components/layout/Testimonials";

import Footer from "../components/layout/Footer";
import AboutInfo from "../components/layout/AboutInfo";
import ContactForm from "../components/layout/ContactForm";
import Socialmedia from "../components/layout/Socialmedia";
import Whoare from "../components/layout/Whoare";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-black">
      <HeroHeader />
      <section className="bg-gradient-to-br from-black via-gray-900 to-black">
        <AboutInfo />
        <Whoare />
        <Testimonials />
        <ContactForm />
        <Socialmedia />
      </section>
    </div>
  );
};

export default Home;
