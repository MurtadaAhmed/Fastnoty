import {useState} from "react";

type NoteFormProps = {
    onAddNote: (title: string, text: string) => void;
}

function NoteForm({ onAddNote }: NoteFormProps) {

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