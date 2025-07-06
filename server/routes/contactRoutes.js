import express from "express";
import { sendMsg } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", sendMsg); // POST /api/contact

export default router;
