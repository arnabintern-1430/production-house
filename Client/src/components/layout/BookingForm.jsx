import React, { useState } from "react";
import { CheckCircle, User, Mail, Phone } from "lucide-react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../../firebase";
import PaymentButton from "./PaymentButton";
import { toast } from "react-toastify";

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  // Setup reCAPTCHA
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        { size: "invisible" }
      );
    }
  };

  // Send OTP
  const sendOtp = async () => {
    try {
      if (formData.phone.length !== 10) {
        toast.dismiss();
        toast.error("Enter valid 10-digit number");
        return;
      }
      setupRecaptcha();
      const appVerifier = window.recaptchaVerifier;

      const phoneNumber = formData.phone.startsWith("+91")
        ? formData.phone
        : `+91${formData.phone}`;

      const result = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      setConfirmationResult(result);
      setIsOtpSent(true);
      toast.dismiss();
      toast.success("OTP sent successfully!");
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.dismiss();
      toast.error("Failed to send OTP. Please check number.");
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    try {
      if (!confirmationResult) {
        toast.dismiss();
        return toast.error("No OTP request found. Try again.");
      }
      if (otp.length !== 6) {
        toast.dismiss();
        return toast.error("Enter valid 6-digit OTP");
      }

      const result = await confirmationResult.confirm(otp);
      const idToken = await result.user.getIdToken();

      const res = await fetch("http://localhost:5000/api/users/cretateUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, idToken }),
      });

      const data = await res.json();

      if (res.ok) {
        setIsVerified(true);
        toast.dismiss();
        toast.success("User registered & verified!");
        console.log("Saved user:", data.user);
      } else {
        toast.dismiss();
        toast.error(data.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.dismiss();
      toast.error("Invalid OTP. Try again.");
    }
  };

  return (
    <section className="pt-4 sm:pt-6 pb-12 sm:pb-20 flex justify-center items-center">
      <div className="w-full max-w-lg md:max-w-2xl mx-auto px-4 sm:px-6">
        <div className="bg-[#111827]/90 backdrop-blur-md border border-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl shadow-blue-500/20 overflow-hidden">
          <div className="p-4 sm:p-8 md:p-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 sm:mb-10 text-center leading-snug">
              Book Your Session
            </h3>

            {/* Form */}
            <div className="space-y-5 sm:space-y-6">
              {/* Name */}
              <div className="relative">
                <User className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg sm:rounded-xl pl-10 pr-4 py-3 sm:py-4 focus:outline-none focus:border-blue-500 text-base sm:text-lg"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg sm:rounded-xl pl-10 pr-4 py-3 sm:py-4 focus:outline-none focus:border-blue-500 text-base sm:text-lg"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="10-digit phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg sm:rounded-xl pl-10 pr-20 sm:pr-24 py-3 sm:py-4 focus:outline-none focus:border-blue-500 text-base sm:text-lg"
                  disabled={isOtpSent}
                />
                {!isVerified && (
                  <button
                    onClick={sendOtp}
                    disabled={isOtpSent}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-md sm:rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm transition-colors"
                  >
                    {isOtpSent ? "Sent" : "Send OTP"}
                  </button>
                )}
                {isVerified && (
                  <CheckCircle
                    size={22}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500"
                  />
                )}
              </div>

              {/* OTP Input */}
              {isOtpSent && !isVerified && (
                <div className="relative animate-fade-in-up">
                  <input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg sm:rounded-xl pl-4 pr-20 sm:pr-24 py-3 sm:py-4 focus:outline-none focus:border-blue-500 text-base sm:text-lg"
                  />
                  <button
                    onClick={verifyOtp}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white rounded-md sm:rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm transition-colors"
                  >
                    Verify
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4 sm:pt-6">
                <PaymentButton amount={12000} disabled={!isVerified} />
              </div>
            </div>

            <div id="recaptcha-container"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
