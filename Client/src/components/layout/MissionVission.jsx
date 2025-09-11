import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVission = () => {
  return (
    <section className="relative py-20 sm:py-32 bg-black text-white overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Core{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Purpose
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Our mission and vision guide every decision we make, from nurturing talent to creating groundbreaking content.
          </p>
        </div>

        {/* Side-by-Side Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Mission Card */}
          <div className="bg-[#111827]/80 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl flex flex-col items-start h-full transition-all duration-300 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gray-900 p-3 rounded-full border-2 border-blue-500/50">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
            </div>
            <ul className="text-gray-300 text-lg leading-relaxed list-disc list-inside space-y-3">
              <li>Empower aspiring artists with professional training and career opportunities.</li>
              <li>Promote originality and creativity through quality media content.</li>
              <li>Build a trusted platform that connects fresh talent with the industry.</li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="bg-[#111827]/80 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl flex flex-col items-start h-full transition-all duration-300 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gray-900 p-3 rounded-full border-2 border-purple-500/50">
                <Eye className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To become a leading production house, recognized for innovation and creative excellence, giving artists a global stage to showcase their talent.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVission;

