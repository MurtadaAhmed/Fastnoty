import {useState} from "react";
import {Note} from "./types.ts";
import NoteForm from "./components/NoteForm.tsx";
import NoteList from "./components/NoteList.tsx";

function App() {
    const [notes, setNotes] = useState<Note[]>([])

    const addNote = (text: string) => {
        const newNote: Note = {
            id: Date.now(),
            text,
        };
        setNotes([...notes, newNote])

    }

    const deleteNote = (id: number) => {
        setNotes(notes.filter((note) => note.id !== id))
    }

    return (
        <div>
            <h1>Simple note app</h1>
            <NoteForm onAddNote={addNote} />
            <NoteList notes={notes} onDeleteNote={deleteNote}/>
            <p>Total Notes: {notes.length}</p>
        </div>
    )
}

export default App;