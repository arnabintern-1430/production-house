import React from 'react';

const HeroAbout = () => {
  return (
    <section className="mt-12 relative h-[60vh] sm:h-[70vh] flex items-center justify-center text-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566140967404-b8b3932483f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 animate-fade-in-up">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
          We Don't Just Produce{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Entertainment.
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          MS Entatiment Production House Pvt. Ltd. is where passion meets profession to create a platform for new talent.
        </p>
      </div>
    </section>
  );
};

export default HeroAbout;