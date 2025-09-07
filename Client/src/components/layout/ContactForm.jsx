import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const ContactForm = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can now access the form data from the state
    console.log("Form Data Submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    // Reset the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-repeat opacity-5"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let's Create{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Drop us a line.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-5xl mx-auto bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-2xl shadow-2xl shadow-blue-500/10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Left Side: Contact Info */}
            <div className="p-8 sm:p-10 bg-gradient-to-br from-gray-900 to-[#111827]">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-400 mb-8">
                You can reach us anytime via email or phone.
              </p>
              <div className="space-y-6">
                <a href="mailto:contact@inovix.studio" className="flex items-center gap-4 group">
                  <div className="bg-gray-800 p-3 rounded-full group-hover:bg-blue-500 transition-colors">
                    <Mail className="text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">contact@inovix.studio</p>
                  </div>
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-4 group">
                  <div className="bg-gray-800 p-3 rounded-full group-hover:bg-blue-500 transition-colors">
                    <Phone className="text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-semibold">+91 4567890125</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 group">
                  <div className="bg-gray-800 p-3 rounded-full">
                    <MapPin className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-semibold">123 Cinema Lane, Kolkata, West Bengal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your Name" className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"/>
                </div>
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Your Email" className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"/>
                </div>
                <div className="relative">
                    <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-gray-500" />
                    <textarea name="message" value={formData.message} onChange={handleInputChange} rows="5" required placeholder="Your Message" className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
                </div>
                <CustomButton type="submit" variant="primary" className="w-full !py-4 !text-base">
                  <div className="flex items-center justify-center gap-2">
                    Send Message
                    <Send size={18} />
                  </div>
                </CustomButton>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

