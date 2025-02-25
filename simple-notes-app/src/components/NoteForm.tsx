import {useState} from "react";

type NoteFormProps = {
    onAddNote: (title: string, text: string) => void;
}

function NoteForm({ onAddNote }: NoteFormProps) {
    /*
    1. onAddNote :
    - this is imported from Apps.tsx <NoteForm onAddNote={addNote} />
    2. handleSubmit:
    - this function returns the form for submitting the title and text
    - it captures the title and text, and then it passes it to onAddNote function >> onAddNote(title, text)
     */

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAddNote(title, text);
        setTitle('')
        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <button type="submit">Add Note</button>
        </form>
    )
}

export default NoteForm