import React from 'react';
import { Lightbulb, ClipboardList, Film, Rocket } from 'lucide-react';

const OurProcess = () => {
  const processSteps = [
    {
      title: 'Talent Discovery',
      description: 'We actively seek out and identify promising new talent across various creative fields.',
      icon: <Lightbulb className="w-8 h-8 text-purple-400 transition-transform duration-300 group-hover:scale-110" />,
    },
    {
      title: 'Training & Development',
      description: 'Our experts provide professional training and guidance to nurture their skills and prepare them for the industry.',
      icon: <ClipboardList className="w-8 h-8 text-purple-400 transition-transform duration-300 group-hover:scale-110" />,
    },
    {
      title: 'Portfolio Creation',
      description: 'We produce high-quality portfolios, music albums, and video content to professionally showcase their abilities.',
      icon: <Film className="w-8 h-8 text-purple-400 transition-transform duration-300 group-hover:scale-110" />,
    },
    {
      title: 'Industry Promotion',
      description: 'We bridge the gap between emerging artists and professional opportunities, helping them launch and grow their careers.',
      icon: <Rocket className="w-8 h-8 text-purple-400 transition-transform duration-300 group-hover:scale-110" />,
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Talent{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            From discovering new talent to promoting them in the industry, our process is designed for artistic success.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Connector Line */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-gray-800"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="group relative z-10 bg-[#111827] p-8 rounded-2xl border border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:bg-gray-900 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gray-900 rounded-full border-2 border-gray-700 transition-all duration-300 group-hover:border-purple-500 group-hover:bg-purple-500/10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{step.title}</h3>
                <p className="text-gray-400 text-center leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;