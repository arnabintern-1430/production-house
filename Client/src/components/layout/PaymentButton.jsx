import React from "react";
import axios from "axios";
import { ArrowRight } from "lucide-react";

const PaymentButton = ({ userId, amount, disabled }) => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (disabled) return; // safety check

    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("Razorpay SDK failed to load. Check your connection.");
      return;
    }

    // Create Order (Backend)
    const { data } = await axios.post("http://localhost:5000/api/payment/create-order", {
      userId: "68bd3f420925c5d1a5656223",
      amount: 100,
    });

    const options = {
      key: "rzp_test_ChAB3xcGMiAJzv",
      amount: data.amount,
      currency: data.currency,
      name: "Course Purchase",
      description: "Payment for course",
      order_id: data.orderId,
      handler: async (response) => {
        await axios.post("http://localhost:5000/api/payment/verify-payment", {
          orderId: response.razorpay_order_id,
          paymentId: response.razorpay_payment_id,
          signature: response.razorpay_signature,
        });
        alert("Payment Successful!");
      },
      theme: { color: "#2563eb" },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <button
      onClick={handlePayment}
      disabled={disabled}
      className={`w-full font-medium rounded-lg py-4 text-lg flex items-center justify-center gap-2 transition-all duration-200
        ${disabled
          ? "bg-gray-600 cursor-not-allowed text-gray-300"
          : "bg-blue-600 hover:bg-blue-700 active:scale-95 text-white"
        }`}
    >
      Pay ₹{amount}
      <ArrowRight size={20} />
    </button>
  );
};

export default PaymentButton;
