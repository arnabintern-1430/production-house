import mongoose from "mongoose";

const coursePurchaseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "completed", "failed", "refunded"],
        default: "pending"
    },
    paymentId: {
        type: String,
        default: null // Required only after successful payment
    },
    orderId: {   
        type: String,
        required: true,
        unique: true // Ensures no duplicate orders
    },
    signature: {
        type: String,
        default: null // Required for verification
    }
}, { timestamps: true });

export const CoursePurchase = mongoose.model("CoursePurchase", coursePurchaseSchema);