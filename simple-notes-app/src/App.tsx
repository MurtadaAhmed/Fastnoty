import {useEffect, useState} from "react";
import {Note} from "./types.ts";
import './styles/App.css'
import AddNoteForm from "./components/AddNoteForm.tsx"
import ListNotes from "./components/ListNotes.tsx"
import {fetchNotes, saveNote} from "./api/APIService.ts"


function App() {
    const [notes, setNotes] = useState<Note[]>([])

    useEffect(() => {
        fetchNotes().then(setNotes)
    }, []);

    useEffect(() => {
        saveNote(notes);
    }, [notes]);


    return (
        <div>
            <h1>📖 Simple note app</h1>
            <AddNoteForm notes={notes} setNotes={setNotes} />
            <ListNotes notes={notes} setNotes={setNotes}/>
            <p>Total Notes: {notes.length}</p>
        </div>
    )
}

export default App;