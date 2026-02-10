import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { requireFields } from "../middleware/validate.js";

const router = express.Router();
router.post ("/register", requireFields(["username", "password"]), register);
router.post ("/login", requireFields(["username", "password"]), login);

export default router;