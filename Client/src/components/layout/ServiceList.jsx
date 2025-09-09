import React from 'react';
import { Camera, CalendarDays, UserCheck, Sparkles, ArrowRight } from 'lucide-react';
import CustomButton from '../ui/CustomButton';
import { useAppContext } from "../../context/AppContext";

const ServiceList = () => {
  const { navigate } = useAppContext();
  const otherServices = [
    {
      title: 'Event Organization',
      description: 'From intimate gatherings to large-scale productions, we manage every detail to create unforgettable and seamless events.',
      icon: <CalendarDays className="w-10 h-10 text-blue-400" />,
    },
    {
      title: 'Model Booking',
      description: 'Access our extensive network of professional models to find the perfect talent for your campaign, shoot, or event.',
      icon: <UserCheck className="w-10 h-10 text-blue-400" />,
    },
    {
      title: 'Training & Grooming',
      description: 'Our expert-led workshops empower aspiring models with the skills, confidence, and industry knowledge to succeed.',
      icon: <Sparkles className="w-10 h-10 text-blue-400" />,
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Featured Service: Portfolio Shoot */}
        <div className="relative bg-gradient-to-br from-[#111827] to-gray-900 p-8 sm:p-12 rounded-3xl border border-purple-500/50 shadow-2xl shadow-purple-500/20 mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-gray-800 p-4 rounded-full border-2 border-purple-500">
                  <Camera className="w-12 h-12 text-purple-400" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Portfolio Shoot</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We craft stunning, high-fashion portfolios that capture your unique essence and make a powerful statement in the industry. Let us create the images that launch your career.
              </p>
              <CustomButton 
                variant="primary"
                onClick={() => navigate("/booknow")}
                className="!text-lg !py-4 !px-8"
              >
                <div className="flex items-center justify-center gap-2">
                  Book Now
                  <ArrowRight size={20} />
                </div>
              </CustomButton>
            </div>
            <div className="hidden lg:block relative h-full min-h-[250px]">
               <img src="https://images.unsplash.com/photo-1536293283170-b4604bbe272f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Portfolio Shoot" className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-20"/>
            </div>
          </div>
        </div>

        {/* Other Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#111827] p-8 rounded-2xl border border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-6 mb-6">
                  <div className="bg-gray-900 p-4 rounded-full border-2 border-gray-700 group-hover:border-blue-500 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;

