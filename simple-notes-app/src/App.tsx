import {useEffect, useState} from "react";
import {Note} from "./types.ts";
import NoteForm from "./components/NoteForm.tsx";
import NoteList from "./components/NoteList.tsx";
import './styles/App.css'

const API_URL = "http://localhost:5000/note"

function App() {
    const [notes, setNotes] = useState<Note[]>([])

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then(setNotes)
    }, [])

    useEffect(() => {
        fetch(API_URL, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(notes)
        })
    }, [notes]);

    const addNote = (title: string, text: string) => {
        const newNote: Note = {
            id: Date.now(),
            title,
            text,
        };
        setNotes([...notes, newNote])

    }

    const deleteNote = (id: number) => {
        setNotes(notes.filter((note) => note.id !== id))
    }

    const editNote = (id: number,newTile: string, newText: string) => {
        setNotes(
            notes.map((note) => note.id === id? {...note, title: newTile, text: newText}: note)
        )
    }

    return (
        <div>
            <h1>📖 Simple note app</h1>
            <NoteForm onAddNote={addNote} />
            <NoteList notes={notes} onDeleteNote={deleteNote} onEditNote={editNote}/>
            <p>Total Notes: {notes.length}</p>
        </div>
    )
}

export default App;