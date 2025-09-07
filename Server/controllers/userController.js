import User from "../models/User.js";
import admin from "../firebase/firebase.js";


// export const createUser = async (req, res) => {
//     try {
//         const { name, email, phone } = req.body;

//         // Basic validation
//         if (!name || !email || !phone) {
//             return res.status(400).json({ message: "All fields are required" });
//         }

//         // Check if user already exists
//         const existingUser = await User.findOne({ phone });
//         if (existingUser) {
//             return res.status(400).json({ message: "User with this phone number already exists" });
//         }

//         const newUser = new User({
//             name,
//             email,
//             phone,
//         });

//         await newUser.save();

//         res.status(201).json({
//             message: "User created successfully",
//             user: newUser,
//         });
//     } catch (error) {
//         res.status(500).json({ message: "Failed to create user", error: error.message });
//     }
// };
// export const createUser = async (req, res) => {
//   const { name, email, phone, idToken, isverify } = req.body;

//   if (!idToken) return res.status(400).json({ message: "idToken is required" });

//   try {
//     // Verify Firebase token
//     const decodedToken = await admin.auth().verifyIdToken(idToken);
//     const uid = decodedToken.uid;

//     // Check if user already exists
//     // const existingUser = await User.findOne({ phone });
//     // if (existingUser) {
//     //   return res.status(400).json({ message: "User already exists" });
//     // }

//     // Create user
//     const newUser = new User({
//       name,
//       email,
//       phone,
//       isVerified: isverify || false
//     });

//     await newUser.save();

//     res.status(201).json({ message: "User created and verified successfully" });
//   } catch (error) {
//     console.error("Error creating user:", error);
//     res.status(500).json({ message: "Internal server error", error: error.message });
//   }
// };


export const createUser = async (req, res) => {
    try {
        const { name, email, phone, idToken } = req.body;

        // Verify Firebase ID token
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        const uid = decodedToken.uid;

        // Check if phone/email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Phone number already registered" });
        }

        // Create new user
        const user = new User({
            name,
            email,
            phone,
            isVerified: true,
        });

        await user.save();
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch users", error: error.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch user", error: error.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Failed to update user", error: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete user", error: error.message });
    }
};
