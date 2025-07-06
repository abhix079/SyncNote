import express from "express";
import {
  createNote,
  deleteNote,
  editNote,
  getNote,
} from "../controllers/noteController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/notes", protect, getNote);
router.post("/notes", protect, createNote);
router.put("/notes/:id", protect, editNote);
router.delete("/notes/:id", protect, deleteNote);

export default router;
