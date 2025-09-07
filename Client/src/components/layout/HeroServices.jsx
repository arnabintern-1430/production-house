import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroServices = () => {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center text-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 animate-zoom-out" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
        >
          Our Suite of{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Creative Services
          </span>
        </h1>
        <p 
            className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
        >
          From concept to creation, we offer a complete range of professional services to bring your vision to life.
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

export default HeroServices;
