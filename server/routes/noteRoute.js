import express from "express";
import { createNote, deleteNote, editNote, getNote } from "../controllers/noteController.js";

const router = express.Router();

router.get("/notes",getNote);
router.post("/notes",createNote);
router.put("/notes/:id",editNote);
router.delete("/notes/:id",deleteNote)

export default router;
