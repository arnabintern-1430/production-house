import React from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Subhajit Das",
      company: "CEO, CreativeWorks Inc.",
      review:
        "MS Entertainment Production House Pvt. Ltd. brought our vision to life with stunning cinematic quality. Their attention to detail and creative input were invaluable. Truly a team of professionals.",
      avatar:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400",
    },
    {
      name: "Priyanka Sen",
      company: "Marketing Director, TechNova",
      review:
        "The final video exceeded all our expectations. The team was collaborative, responsive, and incredibly talented. We've seen a significant boost in engagement since the launch.",
      avatar:
        "https://plus.unsplash.com/premium_photo-1672691612619-29301d9aafac?q=80&w=400",
    },
    {
      name: "Arindam Chatterjee",
      company: "Founder, Evermore Events",
      review:
        "For event videography, there's no one better. MS Entertainment Production House Pvt. Ltd. captured the energy and emotion of our conference perfectly. I couldn't be happier with the results.",
      avatar:
        "https://images.unsplash.com/photo-1701980889802-55ff39e2e973?q=80&w=400",
    },
    {
      name: "Mousumi Roy",
      company: "Head of Media, BrightWave Studios",
      review:
        "From pre-production to final edits, the process was seamless. Their storytelling approach and visual style elevated our brand campaign to the next level. Thanks to MS Entertainment Production House Pvt. Ltd.",
      avatar:
        "https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?q=80&w=400",
    },
    {
      name: "Sayan Mukherjee",
      company: "Creative Director, Luxe Weddings",
      review:
        "MS Entertainment Production House Pvt. Ltd. transformed our wedding videos into cinematic masterpieces. Every emotion, every detail was captured beautifully. Highly recommended!",
      avatar:
        "https://images.unsplash.com/photo-1660587398631-cff6fc7c33ce?q=80&w=400",
    },
  ];

  // data দুইবার রিপিট করতে হবে যাতে loop seamless হয়
  const repeatedData = [...testimonialsData, ...testimonialsData];

  return (
    <section id="testimonials" className="p-8 bg-black">
      <h2 className="text-white text-3xl font-bold mb-6 text-center">
        Testimonials
      </h2>

      <div className="slider-container overflow-hidden">
        <div className="slider-track-wrapper w-full overflow-x-auto scroll-smooth">
          <div className="slide-track flex animate-scroll hover:animation-pause">
            {repeatedData.map((testimonial, index) => (
              <div
                key={index}
                className="slide min-w-[300px] max-w-[300px] bg-[#111827] border border-gray-800 p-6 rounded-2xl shadow-lg flex-shrink-0 mx-2"
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
      </div>

      <style jsx>{`
        .slider-track-wrapper {
          scrollbar-width: none; /* Firefox */
        }
        .slider-track-wrapper::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        .slide-track {
          width: calc(316px * ${repeatedData.length}); /* 300px + 2*8px (mx-2) */
          animation: scroll 40s linear infinite;
        }

        .animate-scroll {
          animation-play-state: running;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;