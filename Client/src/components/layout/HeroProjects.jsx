import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroProjects = () => {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center text-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 animate-zoom-out" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
        >
          Our Creative{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Showcase
          </span>
        </h1>
        <p 
            className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
        >
          A curated collection of our finest work, showcasing our passion for storytelling and cinematic excellence.
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-600 animate-bounce">
              <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
      </div>
    </section>
  );
};

export default HeroProjects;
