import React from "react";
import { Youtube, ArrowRight } from "lucide-react";
import CustomButton from "../ui/CustomButton";
import { useAppContext } from "../../context/AppContext";
import { motion } from "framer-motion";

const HeroHeader = () => {
  const { navigate } = useAppContext();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

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
        <source src="https://cdn.pixabay.com/video/2019/09/04/26531-357855224_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-5xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
        >
          Innovative Video{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Production
          </span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Launching Our Latest Project on YouTube
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <CustomButton
            variant="primary"
            onClick={() => navigate("/projects")}
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroHeader;
