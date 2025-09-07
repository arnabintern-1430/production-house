import React, { useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../firebase";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [step, setStep] = useState(1);

  // Setup invisible reCAPTCHA
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
      setupRecaptcha();
      const appVerifier = window.recaptchaVerifier;

      // ✅ Ensure +91 prefix
      const phoneNumber = formData.phone.startsWith("+91")
        ? formData.phone
        : `+91${formData.phone}`;

      const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(result);
      setStep(2);
      alert("OTP sent!");
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Please check phone number.");
    }
  };

  // Verify OTP + register user
  const verifyOtp = async () => {
    try {
      if (!confirmationResult) {
        return alert("No OTP request found. Please try again.");
      }

      // ✅ Verify OTP with Firebase
      const result = await confirmationResult.confirm(otp);

      const idToken = await result.user.getIdToken();

      const res = await fetch("http://localhost:5000/api/users/cretateUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, idToken }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(" User registered & verified!");
        console.log("Saved user:", data.user);
      } else {
        alert(" " + data.message);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div>
      {step === 1 && (
        <div className="flex flex-col gap-3 bg-blue-200 p-5 rounded">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Phone (10 digits only)"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <button onClick={sendOtp}>Send OTP</button>
          <div id="recaptcha-container"></div>
        </div>
      )}

      {step === 2 && (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify & Register</button>
        </div>
      )}
    </div>
  );
};

export default UserForm;
