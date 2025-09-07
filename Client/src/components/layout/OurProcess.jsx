import React from 'react';
import { Lightbulb, ClipboardList, Film, Rocket } from 'lucide-react';

const OurProcess = () => {
  const processSteps = [
    {
      title: 'Concept & Strategy',
      description: 'We collaborate to define your vision, goals, and create a comprehensive blueprint for success.',
      icon: <Lightbulb className="w-8 h-8 text-purple-400 transition-transform duration-300 group-hover:scale-110" />,
    },
    {
      title: 'Pre-Production',
      description: 'Every detail is planned, from scriptwriting and storyboarding to casting and location scouting.',
      icon: <ClipboardList className="w-8 h-8 text-purple-400 transition-transform duration-300 group-hover:scale-110" />,
    },
    {
      title: 'Filming & Production',
      description: 'Our expert crew uses state-of-the-art equipment to capture stunning visuals and bring the story to life.',
      icon: <Film className="w-8 h-8 text-purple-400 transition-transform duration-300 group-hover:scale-110" />,
    },
    {
      title: 'Post-Production & Delivery',
      description: 'We meticulously edit, color grade, and add effects to craft the final masterpiece, delivered on time.',
      icon: <Rocket className="w-8 h-8 text-purple-400 transition-transform duration-300 group-hover:scale-110" />,
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How We Bring Ideas to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Life
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Our streamlined process ensures a seamless journey from concept to final cut.
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

