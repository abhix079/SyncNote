import Note from "../models/Note.js";

export const getNote = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch notes" });
  }
};

export const createNote = async (req, res) => {
  try {
    const note = await Note.create({ ...req.body, user: req.user.id });
    res.status(201).json({ message: "Note created successfully", note });
  } catch (err) {
    res.status(500).json({ message: "Failed to create note", error: err.message });
  }
};

export const editNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note || note.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "Note updated", note: updatedNote });
  } catch (err) {
    res.status(500).json({ message: "Failed to update note", error: err.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note || note.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await note.deleteOne();
    res.status(200).json({ message: "Note deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete note", error: err.message });
  }
};

