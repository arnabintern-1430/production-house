import React, { useEffect, useRef } from "react";
import { Camera, CalendarDays, UserCheck, Sparkles, ArrowRight } from "lucide-react";
import CustomButton from "../ui/CustomButton";
import { useAppContext } from "../../context/AppContext";

const ServiceList = () => {
  const { navigate } = useAppContext();
  const cardsRef = useRef([]);

  const services = [
    {
      title: "Portfolio Shoot",
      description:
        "We craft stunning, high-fashion portfolios that capture your unique essence and make a powerful statement in the industry. Let us create the images that launch your career.",
      icon: <Camera className="w-12 h-12 text-purple-400" />,
      bg_img:
        "https://images.unsplash.com/photo-1536293283170-b4604bbe272f?q=80&w=1170&auto=format&fit=crop",
    },
    {
      title: "Event Organization",
      description:
        "From intimate gatherings to large-scale productions, we manage every detail to create unforgettable and seamless events.",
      icon: <CalendarDays className="w-12 h-12 text-blue-400" />,
      bg_img:
        "https://images.unsplash.com/photo-1660795308754-4c6422baf2f6?q=80&w=1331&auto=format&fit=crop",
    },
    {
      title: "Model Booking",
      description:
        "Access our extensive network of professional models to find the perfect talent for your campaign, shoot, or event.",
      icon: <UserCheck className="w-12 h-12 text-blue-400" />,
      bg_img:
        "https://plus.unsplash.com/premium_photo-1663099844257-a6749244152a?q=80&w=1197&auto=format&fit=crop",
    },
    {
      title: "Training & Grooming",
      description:
        "Our expert-led workshops empower aspiring models with the skills, confidence, and industry knowledge to succeed.",
      icon: <Sparkles className="w-12 h-12 text-blue-400" />,
      bg_img:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop",
    },
  ];

  // IntersectionObserver for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 sm:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative bg-gradient-to-br from-[#111827] to-gray-900 p-6 sm:p-10 lg:p-12 rounded-3xl border border-purple-500/50 shadow-2xl shadow-purple-500/20 overflow-hidden opacity-0 translate-y-12 transition-all duration-700"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              
              {/* Image (mobile first: top, desktop: right) */}
              <div className="relative h-56 sm:h-72 md:h-80 lg:h-full min-h-[250px] order-1 lg:order-2">
                <img
                  src={service.bg_img}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-2xl opacity-30 lg:opacity-20"
                />
              </div>

              {/* Text */}
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-6 mb-6">
                  <div className="bg-gray-800 p-4 rounded-full border-2 border-purple-500">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white">
                    {service.title}
                  </h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <CustomButton
                  variant="primary"
                  onClick={() => navigate("/contact")}
                  className="!text-lg !py-4 !px-8"
                >
                  <div className="flex items-center justify-center gap-2">
                    Book Now <ArrowRight size={20} />
                  </div>
                </CustomButton>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-show {
          opacity: 1 !important;
          transform: translateY(0) !important;
          animation: fadeSlideUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ServiceList;
