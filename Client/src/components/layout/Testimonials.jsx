import React from "react";
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Aisha Khan",
      company: "CEO, CreativeWorks Inc.",
      review:
        "Inovix Studio brought our vision to life with stunning cinematic quality. Their attention to detail and creative input were invaluable. Truly a team of professionals.",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "David Chen",
      company: "Marketing Director, TechNova",
      review:
        "The final video exceeded all our expectations. The team was collaborative, responsive, and incredibly talented. We've seen a significant boost in engagement since the launch.",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Maria Rodriguez",
      company: "Founder, Evermore Events",
      review:
        "For event videography, there's no one better. They captured the energy and emotion of our conference perfectly. I couldn't be happier with the results.",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Our clients' success stories are the best measure of our performance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-[#111827] border border-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="absolute top-6 left-6 w-12 h-12 text-gray-700 opacity-50" />
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-gray-300 italic text-lg flex-grow mb-6">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover"
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
