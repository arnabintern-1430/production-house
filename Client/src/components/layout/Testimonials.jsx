import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonialsData = [
    // ... (same testimonials data as before)
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

  // Animation for the main grid container
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger the cards
      },
    },
  };

  // Animation for each card
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        // Stagger the children inside the card
        staggerChildren: 0.1,
      },
    },
  };

  // Animation for elements inside the card
  const cardContentVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="testimonials"
      className="pt-20 pb-8 sm:pt-32 sm:pb-12 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div /* ... (header animation remains the same) */>
          {/* ... header content ... */}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonialsData.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              className="relative bg-[#111827] border border-gray-800 p-8 rounded-2xl shadow-lg flex flex-col h-full overflow-hidden" // Added overflow-hidden
              variants={cardVariants}
            >
              <motion.div variants={cardContentVariants}>
                <Quote className="absolute top-6 left-6 w-12 h-12 text-gray-700 opacity-50" />
              </motion.div>

              <div className="relative z-10 flex flex-col h-full">
                <motion.p
                  className="text-gray-300 italic text-lg flex-grow mb-6 pt-12" // Added padding-top to not overlap quote
                  variants={cardContentVariants}
                >
                  "{testimonial.review}"
                </motion.p>
                <motion.div
                  className="flex items-center mt-auto"
                  variants={cardContentVariants}
                >
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover"
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-white text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
