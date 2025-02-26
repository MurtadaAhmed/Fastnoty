import {useState} from "react";
import {Note} from "../types.ts";

type Props = {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

function AddNoteForm({ notes, setNotes }: Props) {

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const addNote = (e: React.FormEvent) => {
        e.preventDefault()

        if (!text.trim()) return;

        const newNote: Note = {id: Date.now(), title, text}
        setNotes([...notes, newNote])

        setTitle("")
        setText("")
    }

    return (
        <form onSubmit={addNote}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title..."
            />
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a text"
            />
            <div className='submit-delete-all-button'>
            <button type="submit">Add Note</button>
            <button type="button" className='delete-all-button' onClick={() => setNotes([])}>Delete All Notes</button>
            </div>
        </form>
    )
}

export default AddNoteForm