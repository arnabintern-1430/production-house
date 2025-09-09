import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVission = () => {
  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Core{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Purpose
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Our mission and vision guide every decision we make, from nurturing talent to creating groundbreaking content.
          </p>
        </div>

        {/* Content Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl transition-all duration-300 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gray-900 p-4 rounded-full border-2 border-gray-700 group-hover:border-blue-500 transition-colors">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold">Our Mission</h3>
            </div>
            <ul className="text-gray-400 text-lg leading-relaxed list-disc list-inside space-y-2">
              <li>Empower aspiring artists by offering professional training, mentorship, and career opportunities.</li>
              <li>Promote originality and creativity through quality music, films, and media content.</li>
              <li>Build a trusted platform that connects fresh talent with the entertainment industry.</li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl transition-all duration-300 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gray-900 p-4 rounded-full border-2 border-gray-700 group-hover:border-purple-500 transition-colors">
                <Eye className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              To become a leading production house in India, recognized for innovation, professionalism, and creative excellence. We aim to create a sustainable ecosystem where music, acting, and performing arts flourish, giving artists a global stage to showcase their talent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVission;