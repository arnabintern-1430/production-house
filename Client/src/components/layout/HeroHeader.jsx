import React from "react";
import { Youtube, ArrowRight } from "lucide-react";
import CustomButton from "../ui/CustomButton";
import { useAppContext } from "../../context/AppContext";

const HeroHeader = () => {
  const { navigate } = useAppContext();
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="https://placehold.co/1920x1080/000000/FFFFFF?text=Loading..."
      >
        <source src="/videos/production-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4">
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-down"
          style={{ animationDelay: "0.2s" }}
        >
          Innovative Video{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Production
          </span>
        </h1>
        <p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Launching Our Latest Project on YouTube
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <CustomButton
            variant="primary"
            onClick={() => window.open("https://youtube.com", "_blank")}
          >
            <Youtube className="inline-block mr-2" />
            Watch on YouTube
          </CustomButton>
          <CustomButton
            onClick={() => navigate("/projects")}
            variant="secondary"
          >
            Explore Projects
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;
