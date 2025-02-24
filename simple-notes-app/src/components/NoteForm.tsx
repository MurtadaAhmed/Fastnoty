import {useState} from "react";

type NoteFormProps = {
    onAddNote: (text: string) => void;
}

function NoteForm({ onAddNote }: NoteFormProps) {

    const [text, setText] = useState("")

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAddNote(text)
        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
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