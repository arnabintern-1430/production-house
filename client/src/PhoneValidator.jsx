// src/components/PhoneValidator.jsx
import React, { useState } from "react";
// import { auth } from "./firebase";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "./firebase"; // adjust path

const PhoneValidator = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  // Setup Recaptcha
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
    if (!phone.startsWith("+")) {
      alert("Include country code, e.g. +91XXXXXXXXXX");
      return;
    }

    setupRecaptcha();

    try {
      const confirmation = await signInWithPhoneNumber(
        auth,
        phone,
        window.recaptchaVerifier
      );
      setConfirmationResult(confirmation);
      alert("OTP sent successfully!");
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert(error.message);
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    if (!confirmationResult) {
      alert("Send OTP first");
      return;
    }

    try {
      await confirmationResult.confirm(otp);
      setIsVerified(true);
      alert("✅ Phone number verified successfully!");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("❌ Invalid OTP, please try again.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Phone Number Validation</h2>

      <input
        type="text"
        placeholder="+91XXXXXXXXXX"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={sendOtp}>Send OTP</button>

      <div id="recaptcha-container"></div>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={verifyOtp}>Verify OTP</button>

      {isVerified && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          ✅ Phone number verified!
        </p>
      )}
    </div>
  );
};

export default PhoneValidator;
