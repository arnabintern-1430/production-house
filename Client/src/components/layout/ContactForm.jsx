import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/cretateUserWithoutToken", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });


      const result = await response.json();

      if (response.ok) {
        alert("✅ Thank you! Your message has been received.");
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        // alert( + result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("⚠️ Server error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="relative pt-12 pb-20 sm:pt-16 sm:pb-32 bg-black overflow-hidden">
      {/* ... keep your background and left-side info same ... */}

      {/* Right Side: Form */}
      <div className="p-8 sm:p-10">
        <h3 className="text-2xl font-semibold text-white mb-6">
          Send a Message
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Your Name"
              className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Your Email"
              className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="Your Phone"
              className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="relative">
            <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-gray-500" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="5"
              required
              placeholder="Your Message"
              className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
            ></textarea>
          </div>

          <CustomButton type="submit" variant="primary" className="w-full !py-4 !text-base">
            <div className="flex items-center justify-center gap-2">
              Send Message
              <Send size={18} />
            </div>
          </CustomButton>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
