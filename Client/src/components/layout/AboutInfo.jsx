import React from "react";
import { motion } from "framer-motion";

const AboutInfo = () => {
  return (
    <motion.section
      className="bg-black text-white pt-20 pb-10 sm:pt-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">
            Our Story
          </h2>
          <p className="mt-2 text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
            About Us
          </p>
        </div>
        <div className="mt-12 text-lg leading-8 text-gray-300 space-y-6 text-left md:text-justify">
          <p>
            MS Entertainment Production House Private Limited is a premier media
            and Entertainment company committed to discovering, nurturing, and
            promoting new talent in the creative industry. With a strong focus
            on music production, talent training, and professional portfolio
            development, we provide a complete platform for aspiring artists to
            begin and grow their careers.
          </p>
          <p>
            Our in-house production facilities enable us to deliver world-class
            music albums, cinematic video productions, short films, and artist
            showcases. By bridging the gap between emerging talent and
            professional opportunities, we aspire to redefine creativity in the
            Entertainment sector.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutInfo;
