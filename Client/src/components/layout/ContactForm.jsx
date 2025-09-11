import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
} from "lucide-react";
import CustomButton from "../ui/CustomButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/users/cretateUserWithoutToken",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("✅ Thank you! Your message has been received.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Server error. Please try again later.");
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
        {/* Left Section - Contact Info */}
        <div className="flex flex-col justify-center text-white space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Let’s <span className="text-blue-400">Talk</span> About Your Project
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Have questions or ideas? We’d love to hear from you. 
            Fill out the form or reach us through the details below.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-400" />
              <span className="text-gray-300">
                123 Premium Street, Tech City
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-400" />
              <span className="text-gray-300">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-400" />
              <span className="text-gray-300">contact@yourcompany.com</span>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="p-8 sm:p-10 bg-gray-950/60 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Send a <span className="text-blue-400">Message</span>
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your Name"
                className="w-full bg-gray-900/70 text-white border border-gray-700 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-md focus:shadow-blue-500/30"
              />
            </div>

            {/* Email */}
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Your Email"
                className="w-full bg-gray-900/70 text-white border border-gray-700 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-md focus:shadow-blue-500/30"
              />
            </div>

            {/* Phone */}
            <div className="relative group">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Your Phone"
                className="w-full bg-gray-900/70 text-white border border-gray-700 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-md focus:shadow-blue-500/30"
              />
            </div>

            {/* Message */}
            <div className="relative group">
              <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                required
                placeholder="Your Message"
                className="w-full bg-gray-900/70 text-white border border-gray-700 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-md focus:shadow-blue-500/30 resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <CustomButton
              type="submit"
              variant="primary"
              className="w-full !py-4 !text-lg rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-blue-500/40 transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center gap-2">
                Send Message
                <Send size={18} />
              </div>
            </CustomButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
