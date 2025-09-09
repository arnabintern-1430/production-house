import express from "express";
import { verifyPhone } from "../controllers/authController.js";

const router = express.Router();

// Route to verify OTP and create user
router.post("/verify-phone", verifyPhone);

export default router;
