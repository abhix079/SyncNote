import Note from "../models/Note.js";

// Get notes of the logged-in user
export const getNote = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ message: "Error fetching notes", error: err.message });
  }
};

// Create a new note for the logged-in user
export const createNote = async (req, res) => {
  try {
    const note = await Note.create({ ...req.body, user: req.user.id });
    res.status(201).json({
      message: "Note created successfully",
      note
    });
  } catch (err) {
    res.status(500).json({ message: "Error creating note", error: err.message });
  }
};

// Edit a note (only if the note belongs to the user)
export const editNote = async (req, res) => {
  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );

    if (!note) {
      return res.status(404).json({ message: "Note not found or unauthorized" });
    }

    res.status(200).json({
      message: "Note updated successfully",
      note
    });
  } catch (err) {
    res.status(500).json({ message: "Error updating note", error: err.message });
  }
};

// Delete a note (only if the note belongs to the user)
export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id, user: req.user.id });

    if (!note) {
      return res.status(404).json({ message: "Note not found or unauthorized" });
    }

    res.status(200).json({
      message: "Note deleted successfully",
      note
    });
  } catch (err) {
    res.status(500).json({ message: "Error deleting note", error: err.message });
  }
};
