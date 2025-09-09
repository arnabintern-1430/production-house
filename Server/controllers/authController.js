import User from "../models/User.js";
import admin from "../firebase/firebase.js";

// Verify OTP and create user
export const verifyPhone = async (req, res) => {
    const { idToken, name, email, phone } = req.body;

    if (!idToken || !name || !email || !phone) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Verify Firebase token
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        const phoneNumber = decodedToken.phone_number;

        if (phoneNumber !== phone) {
            return res.status(400).json({ message: "Phone number mismatch" });
        }

        // Check if user exists
        const existingUser = await User.findOne({ phone });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create new user
        const user = await User.create({
            name,
            email,
            phone,
            isVerified: true
        });

        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "OTP verification failed", error: error.message });
    }
};
