import React from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Subhajit Das",
      company: "CEO, CreativeWorks Inc.",
      review:
        "MS Entatiment Production House Pvt. Ltd. brought our vision to life with stunning cinematic quality. Their attention to detail and creative input were invaluable. Truly a team of professionals.",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
      name: "Priyanka Sen",
      company: "Marketing Director, TechNova",
      review:
        "The final video exceeded all our expectations. The team was collaborative, responsive, and incredibly talented. We've seen a significant boost in engagement since the launch.",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Arindam Chatterjee",
      company: "Founder, Evermore Events",
      review:
        "For event videography, there's no one better. MS Entatiment Production House Pvt. Ltd. captured the energy and emotion of our conference perfectly. I couldn't be happier with the results.",
      avatar: "https://i.pravatar.cc/150?img=13",
    },
    {
      name: "Mousumi Roy",
      company: "Head of Media, BrightWave Studios",
      review:
        "From pre-production to final edits, the process was seamless. Their storytelling approach and visual style elevated our brand campaign to the next level. Thanks to MS Entatiment Production House Pvt. Ltd.",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
    {
      name: "Sayan Mukherjee",
      company: "Creative Director, Luxe Weddings",
      review:
        "MS Entatiment Production House Pvt. Ltd. transformed our wedding videos into cinematic masterpieces. Every emotion, every detail was captured beautifully. Highly recommended!",
      avatar: "https://i.pravatar.cc/150?img=15",
    },
  ];

  const repeatedData = [...testimonialsData, ...testimonialsData];

  return (
    <section id="testimonials" className="p-8 bg-black overflow-hidden">
      <h2 className="text-white text-3xl font-bold mb-6 text-center">
        Testimonials
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll">
          {repeatedData.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[300px] m-4 bg-[#111827] border border-gray-800 p-6 rounded-2xl shadow-lg flex-shrink-0"
            >
              <Quote className="w-8 h-8 text-gray-700 opacity-50 mb-4" />
              <p className="text-gray-300 italic text-sm mb-4">
                "{testimonial.review}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover"
                />
                <div className="ml-3">
                  <p className="font-semibold text-white text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
