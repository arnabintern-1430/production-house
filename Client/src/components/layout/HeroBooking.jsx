import React from 'react';

const HeroBooking = () => {
  return (
    <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center text-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 animate-fade-in-up">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
          Book Your Next{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Masterpiece
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Secure your session with us and let's start creating something extraordinary together.
        </p>
      </div>
    </section>
  );
};

export default HeroBooking;
