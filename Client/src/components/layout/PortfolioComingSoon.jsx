import React from 'react';
import { Film } from 'lucide-react';
import { motion } from 'framer-motion';

const PortfolioComingSoon = () => {
  return (
    <section 
      id="portfolio" 
      className="bg-black flex items-center w-full h-screen justify-center py-40 sm:py-56"
    >
      <motion.div 
        className="text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gray-900 border border-gray-800 rounded-full">
            <Film className="w-12 h-12 text-blue-400" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Our Work is{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Coming Soon
          </span>
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          We are currently curating our best cinematic productions to showcase here. Please check back shortly to see our latest projects.
        </p>
      </motion.div>
    </section>
  );
};

export default PortfolioComingSoon;
