import express from "express";
import { getUserProfile } from "../controllers/user.controller.js";

const route = express.Router();
route.get("/:id", getUserProfile);
export default route;
