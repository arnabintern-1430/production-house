import React from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Subhajit Das",
      company: "CEO, CreativeWorks Inc.",
      review:
        "MS Entatiment Production House Pvt. Ltd. brought our vision to life with stunning cinematic quality. Their attention to detail and creative input were invaluable. Truly a team of professionals.",
      avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Priyanka Sen",
      company: "Marketing Director, TechNova",
      review:
        "The final video exceeded all our expectations. The team was collaborative, responsive, and incredibly talented. We've seen a significant boost in engagement since the launch.",
      avatar: "https://plus.unsplash.com/premium_photo-1672691612619-29301d9aafac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Arindam Chatterjee",
      company: "Founder, Evermore Events",
      review:
        "For event videography, there's no one better. MS Entatiment Production House Pvt. Ltd. captured the energy and emotion of our conference perfectly. I couldn't be happier with the results.",
      avatar: "https://images.unsplash.com/photo-1701980889802-55ff39e2e973?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mousumi Roy",
      company: "Head of Media, BrightWave Studios",
      review:
        "From pre-production to final edits, the process was seamless. Their storytelling approach and visual style elevated our brand campaign to the next level. Thanks to MS Entatiment Production House Pvt. Ltd.",
      avatar: "https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sayan Mukherjee",
      company: "Creative Director, Luxe Weddings",
      review:
        "MS Entatiment Production House Pvt. Ltd. transformed our wedding videos into cinematic masterpieces. Every emotion, every detail was captured beautifully. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1660587398631-cff6fc7c33ce?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
