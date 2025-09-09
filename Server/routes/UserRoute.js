import express from "express";
import { getAllUsers, getUserById, updateUser, deleteUser, createUser } from "../controllers/userController.js";

const router = express.Router();

// CRUD routes
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post('/cretateUser',createUser)

export default router;
