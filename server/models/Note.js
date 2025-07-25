import mongoose from "mongoose";

const noteSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String },
    description: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);
export default Note;