import express from "express";
import { register } from "../controller/auth.controller.js";
import { requireFilds } from "../middleware/validate.js";




const router = express.Router();
router.post('/register',requireFilds(["username","password"]), register);

export default router