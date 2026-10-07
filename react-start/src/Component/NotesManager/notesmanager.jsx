import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage.js";
import styles from "./justforcoollooks.module.css";
export default function NotesManager() {
  const [notes, setNotes] = useLocalStorage("deze-notes", []);
  const [text, setText] = useState("");

  function addNote(event) {
    event.preventDefault();
    const noteText = text.trim();

    if (!noteText) return;

    setNotes((currentNotes) => [
      { id: crypto.randomUUID(), text: noteText },
      ...currentNotes,
    ]);
    setText("");
  }

  return (
    <main>
      <h1 className={styles.cgr}>Мои заметки</h1>


      <form onSubmit={addNote}>
        <textarea className={styles.cgr}
          id="note-text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Напиши что-нибудь..."
          rows="4"
        />
        <button type="submit" disabled={!text.trim()} className={styles.buttoncgr}>
          Добавить заметку
        </button>
      </form>

      {notes.length > 0 && (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <p>{note.text}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}