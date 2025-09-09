import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    message: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("User", userSchema);
