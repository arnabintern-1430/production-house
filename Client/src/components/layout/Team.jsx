import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "Creative Director",
    bio: "With a decade of experience, Alex leads our creative vision, ensuring every project is a cinematic masterpiece.",
    avatar: "https://i.pravatar.cc/150?img=4",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Samantha Reed",
    role: "Lead Cinematographer",
    bio: "Samantha's eye for detail and mastery of camera work bring a unique perspective to every frame she captures.",
    avatar: "https://i.pravatar.cc/150?img=5",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Marcus Chen",
    role: "Head of Post-Production",
    bio: "Marcus is the wizard who brings it all together, using cutting-edge editing and effects to craft the final narrative.",
    avatar: "https://i.pravatar.cc/150?img=6",
    socials: { linkedin: "#", twitter: "#" },
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 sm:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            The Visionaries{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Behind the Lens
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Meet the passionate professionals who bring creativity and expertise to every project.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-[#111827] border border-gray-800 p-8 rounded-2xl text-center overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                  <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-gray-700 group-hover:border-purple-500 transition-colors duration-300"
                  />
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <p className="text-purple-400 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-400 mb-6">{member.bio}</p>
                  <div className="flex justify-center gap-4">
                      <a href={member.socials.linkedin} className="text-gray-500 hover:text-white transition-colors"><Linkedin /></a>
                      <a href={member.socials.twitter} className="text-gray-500 hover:text-white transition-colors"><Twitter /></a>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
