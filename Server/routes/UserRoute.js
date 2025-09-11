import express from "express";
import { getAllUsers, getUserById, updateUser, deleteUser, createUser, createUser_withoutToken } from "../controllers/userController.js";

const router = express.Router();

// CRUD routes
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post('/cretateUser',createUser)
router.post('/cretateUserWithoutToken',createUser_withoutToken)
export default router;
