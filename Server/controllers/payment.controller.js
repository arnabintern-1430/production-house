import Razorpay from "razorpay";
import crypto from "crypto";
import dotenv from "dotenv";
import { CoursePurchase } from "../models/coursePurchase.model.js";
dotenv.config();
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ Create Razorpay Order
export const createOrder = async (req, res) => {
  try {
    const { userId, amount } = req.body;
    console.log("Incoming order request:", { userId, amount });

    const options = {
      amount: amount * 100, // paise
      currency: "INR",
      receipt: "order_" + Date.now(),
    };

    console.log("Options for Razorpay:", options);
    console.log("Using Key ID:", process.env.RAZORPAY_KEY_ID);

    const order = await razorpay.orders.create(options);

    // Save in DB
    const newPurchase = new CoursePurchase({
      userId,
      amount,
      orderId: order.id,
      status: "pending",
    });
    await newPurchase.save();

    res.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error(" Razorpay Order Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


// ✅ Verify Razorpay Payment
export const verifyPayment = async (req, res) => {
  try {
    const { orderId, paymentId, signature } = req.body;

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(orderId + "|" + paymentId)
      .digest("hex");

    if (generatedSignature !== signature) {
      return res.status(400).json({ success: false, message: "Invalid Signature" });
    }

    // Update DB
    const purchase = await CoursePurchase.findOneAndUpdate(
      { orderId },
      { status: "completed", paymentId, signature },
      { new: true }
    );

    res.json({ success: true, message: "Payment Verified Successfully", purchase });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
