import React from "react";
import { Vortex } from "../components/ui/vortex";

export function Home() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/production-bg.mp4"
        autoPlay
        muted
        loop
      />

      {/* Cinematic Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10 backdrop-blur-[2px]"></div>

      {/* Content with Vortex effect */}
      <Vortex
        backgroundColor="transparent"
        className="relative z-20 flex flex-col items-center justify-center text-center px-4 h-full"
      >
        {/* Hero Title */}
        <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]">
          Inovix Production House
        </h1>

        {/* Subtitle */}
        <p className="text-gray-200 text-lg md:text-2xl mt-4 max-w-2xl leading-relaxed">
          Crafting timeless visuals — from cinematic portfolios to unforgettable
          events.
        </p>

        {/* Highlighted YouTube Video */}
        <div className="mt-10 w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.8)] border-4 border-white bg-white/5 backdrop-blur-md">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/k_FHxA8cyeQ?rel=0&modestbranding=1"
            title="Production House Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-10">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition rounded-full text-white font-semibold shadow-[0_5px_25px_rgba(59,130,246,0.6)]">
            Book Now
          </button>
          <button className="px-8 py-3 border border-white/40 text-white hover:bg-white/10 transition rounded-full font-semibold backdrop-blur-md">
            Contact Us
          </button>
        </div>
      </Vortex>
    </div>
  );
}
