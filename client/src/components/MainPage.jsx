import styles from "../components/MainPage.module.css";
import { PiSmileySad } from "react-icons/pi";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";




function MainPage() {
  const [showDialog, setShowDialog] = useState(false);
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({ title: "", category: "", description: "" });
  const [editingNoteId, setEditingNoteId] = useState(null);

 const fetchNotes = async () => {
  const res = await axios.get("http://localhost:3000/api/notes");
  const sortedNotes = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  setNotes(sortedNotes);
};


  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!note.title || !note.description) return;

    if (editingNoteId) {
      await axios.put(`http://localhost:3000/api/notes/${editingNoteId}`, note);
    } else {
      await axios.post("http://localhost:3000/api/notes", note);
    }

    setNote({ title: "", category: "", description: "" });
    setEditingNoteId(null);
    setShowDialog(false);
    fetchNotes();
  };

  const handleEdit = (note) => {
    setNote({ title: note.title, category: note.category, description: note.description });
    setEditingNoteId(note._id);
    setShowDialog(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/api/notes/${id}`);
    fetchNotes();
  };

  const handleCancel = () => {
    setShowDialog(false);
    setEditingNoteId(null);
    setNote({ title: "", category: "", description: "" });
  };

  return (
    <>
      <div className={styles.addBtn}>
        <button
          onClick={() => {
            setShowDialog(true);
            setNote({ title: "", category: "", description: "" });
            setEditingNoteId(null);
          }}
        >
          Add Notes
        </button>
      </div>

      {showDialog && <div className={styles.overlay}></div>}

      {showDialog && (
        <div className={styles.dialog}>
          <form onSubmit={handleSubmit}>
            <h2>{editingNoteId ? "Update Note" : "Add Note"}</h2>
            <input
              type="text"
              placeholder="Title"
              value={note.title}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Category"
              value={note.category}
              onChange={(e) => setNote({ ...note, category: e.target.value })}
            />
            <textarea
              placeholder="Description"
              value={note.description}
              onChange={(e) => setNote({ ...note, description: e.target.value })}
              required
            />
            <div className={styles.dialogButtons}>
              <button type="submit">{editingNoteId ? "Update" : "Save"}</button>
              <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div className={styles.noteContainer}>
        {notes.length === 0 ? (
          <div className={styles.blankHeading}>
            <PiSmileySad size={70} />
            <h3>Sorry !! No notes found</h3>
            <p>Click on "Add notes" to start adding notes.</p>
          </div>
        ) : (
          <div className={styles.cardRow}>
            {notes.map((n) => (
              <div key={n._id} className={styles.noteCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.timestamp}>
                    {new Date(n.createdAt).toLocaleDateString()} |{" "}
                    {new Date(n.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                  <div className={styles.cardActions}>
                    <button onClick={() => handleEdit(n)}><FaRegEdit size={17} /></button>
                    <button onClick={() => handleDelete(n._id)}><RiDeleteBin6Line size={17}/></button>
                  </div>
                </div>
                <h3>{n.title}</h3>
                <small className={styles.category}>{n.category}</small>
                <p>{n.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default MainPage;
