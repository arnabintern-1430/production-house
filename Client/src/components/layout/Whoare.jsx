import React from "react";
import { motion } from "framer-motion";

const Whoare = () => {
  return (
    <div className="bg-gray-950 text-white py-6">
      {/* About Section */}
      <motion.section
        className="py-16 px-6 md:py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Who We Are, What We Actually Do
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              MS Entertainment Production House Pvt. Ltd. is a premier media and
              Entertainment company committed to discovering, nurturing, and
              promoting new talent in the creative industry. With a strong focus
              on music production, talent training, and professional portfolio
              development, we provide a complete platform for aspiring artists
              to begin and grow their careers.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our in-house production facilities enable us to deliver
              world-class music albums, cinematic video productions, short
              films, and artist showcases. By bridging the gap between emerging
              talent and professional opportunities, we aspire to redefine
              creativity in the Entertainment sector.
            </p>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1695014549584-edc286c70b82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Film set production"
              className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Whoare;
