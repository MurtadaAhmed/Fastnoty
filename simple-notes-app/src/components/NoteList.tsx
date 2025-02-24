import {Note} from "../types.ts";

type NoteListPros = {
    notes: Note[];
    onDeleteNote: (id: number) => void;
    onEditNote: (id: number, newText: string) => void;
}

function NoteList({notes, onDeleteNote, onEditNote}: NoteListPros) {

    const handleEdit = (id: number, currentText: string) => {
        const newText = prompt("Edit your note", currentText)

        if (newText && newText.trim() !== "") {
            onEditNote(id, newText)
        }
    }

    return (
        <ul>
            {notes.map((note) => (
                <li key={note.id}>
                    {note.text}
                    <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                    <button onClick={() => handleEdit(note.id, note.text)}>Edit</button>

                </li>
                ))}
        </ul>
    )
}

export default NoteList