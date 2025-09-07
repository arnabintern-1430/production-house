import React from "react";
import axios from "axios";

const PaymentButton = ({ userId, amount }) => {
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
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        if (!res) {
            alert("Razorpay SDK failed to load. Check your connection.");
            return;
        }

        // Create Order (Backend)
        const { data } = await axios.post("http://localhost:5000/api/payment/create-order", {
            userId:"68bd3f420925c5d1a5656223",
            amount: 100,  // <-- correct JSON key:value
        });


        const options = {
            key:  "rzp_test_ChAB3xcGMiAJzv", // from .env
            amount: data.amount,
            currency: data.currency,
            name: "Course Purchase",
            description: "Payment for course",
            order_id: data.orderId,
            handler: async (response) => {
                // Send verification to backend
                await axios.post("http://localhost:5000/api/payment/verify-payment", {
                    orderId: response.razorpay_order_id,
                    paymentId: response.razorpay_payment_id,
                    signature: response.razorpay_signature,
                });
                alert("Payment Successful!");
            },
            theme: { color: "#3399cc" },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <button onClick={handlePayment} style={{ padding: "10px 20px", background: "#3399cc", color: "#fff", border: "none", borderRadius: "5px" }}>
            Pay ₹{amount}
        </button>
    );
};

export default PaymentButton;
