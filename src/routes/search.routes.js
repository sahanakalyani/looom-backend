import express from "express";
import { searchAll } from "../controllers/search.controller";
 
const router = express.Router(
    router.get("/",searchAll)

 );
 export default router;