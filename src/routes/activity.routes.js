import express from "express";
import { getActivity } from "../controllers/activity.controller";
import { auth } from "../middleware/auth. js";

const router = express.Router();
router.get("/", auth, getActivity);

export default router;
