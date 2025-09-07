import React, { useState } from 'react';
import { ChevronDown, Send, CheckCircle, ArrowRight, User, Mail, Phone, Calendar } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const BookingForm = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    service: 'Portfolio Shoot',
    name: '',
    email: '',
    mobile: '',
    date: '',
    otp: '',
  });

  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Get today's date for the date picker minimum
  const today = new Date().toISOString().split('T')[0];
  const services = ['Portfolio Shoot', 'Event Organization', 'Model Booking', 'Training & Grooming'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const selectService = (service) => {
    setFormData({ ...formData, service });
    setIsDropdownOpen(false);
  };

  // --- OTP Functions (Simulated Backend) ---
  const handleSendOtp = async () => {
    if (formData.mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    console.log(`Sending OTP to ${formData.mobile}...`);
    alert(`An OTP has been sent to ${formData.mobile}.`);
    setIsOtpSent(true);
  };

  const handleVerifyOtp = async () => {
    if (formData.otp.length !== 6) {
        alert("Please enter a valid 6-digit OTP.");
        return;
    }
    console.log(`Verifying OTP ${formData.otp}...`);
    alert("Mobile number verified successfully!");
    setIsVerified(true);
  };
  
  // --- Form Submission Function ---
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!isVerified) {
        alert("Please verify your mobile number before proceeding.");
        return;
    }
    
    console.log("Booking Data to be saved:", formData);
    alert("Redirecting to the payment gateway...");
  };


  return (
    <section className="py-20 sm:py-32 -mt-20">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-2xl shadow-2xl shadow-blue-500/10 overflow-hidden">
            <div className="p-8 sm:p-12">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Book Your Session</h3>
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                
                {/* Custom Service Dropdown */}
                <div className="relative">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Select Service</label>
                    <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-full flex justify-between items-center bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 text-left focus:outline-none focus:border-blue-500 transition-colors">
                        <span>{formData.service}</span>
                        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute z-20 w-full mt-2 bg-[#1c2436] border border-gray-700 rounded-lg shadow-lg animate-fade-in-down">
                            {services.map(service => (
                                <div key={service} onClick={() => selectService(service)} className="px-4 py-3 text-white hover:bg-blue-500/10 cursor-pointer transition-colors">
                                    {service}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Name, Email, Mobile with Icons */}
                <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your Name" className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"/>
                </div>
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Your Email" className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"/>
                </div>
                 <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} required placeholder="10-digit mobile number" className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" disabled={isOtpSent} />
                    {!isVerified && (
                        <CustomButton type="button" variant="secondary" onClick={handleSendOtp} disabled={isOtpSent} className="absolute right-2 top-1/2 -translate-y-1/2 !py-2 !px-3 !text-sm">
                            {isOtpSent ? 'Sent' : 'Send OTP'}
                        </CustomButton>
                    )}
                    {isVerified && <CheckCircle size={24} className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" />}
                </div>

                {/* OTP Field */}
                {isOtpSent && !isVerified && (
                    <div className="relative animate-fade-in-up">
                        <input type="text" name="otp" value={formData.otp} onChange={handleInputChange} required placeholder="6-digit OTP" className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg pl-4 pr-24 py-3 focus:outline-none focus:border-blue-500 transition-colors"/>
                        <CustomButton type="button" variant="secondary" onClick={handleVerifyOtp} className="absolute right-2 top-1/2 -translate-y-1/2 !py-2 !px-3 !text-sm">Verify</CustomButton>
                    </div>
                )}
                
                {/* Date Picker */}
                <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input type="date" name="date" value={formData.date} onChange={handleInputChange} required min={today} className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"/>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <CustomButton type="submit" variant="primary" className="w-full !py-4 !text-lg" disabled={!isVerified}>
                        <div className="flex items-center justify-center gap-2">
                           Proceed to Payment
                           <ArrowRight size={20} />
                        </div>
                    </CustomButton>
                </div>
              </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;

