import express from "express";
import { getNote, createNote, editNote, deleteNote } from "../controllers/noteController.js";
import { authenticate } from "../middleware/auth.js";

const router = express.Router();

router.get("/", authenticate, getNote);
router.post("/", authenticate, createNote);
router.put("/:id", authenticate, editNote);
router.delete("/:id", authenticate, deleteNote);

export default router;
