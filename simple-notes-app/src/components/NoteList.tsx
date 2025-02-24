import {Note} from "../types.ts";

type NoteListPros = {
    notes: Note[];
    onDeleteNote: (id: number) => void;
    onEditNote: (id: number,newTitle: string, newText: string) => void;
}

function NoteList({notes, onDeleteNote, onEditNote}: NoteListPros) {

    const handleEdit = (id: number, currentTitle: string, currentText: string) => {
        const newTitle = prompt("Edit title", currentTitle)
        const newText = prompt("Edit your note", currentText)

        if (newTitle && newText && newTitle.trim() !== "" && newText.trim() !== "") {
            onEditNote(id, newTitle, newText)
        }
    }

    return (
        <ul>
            {notes.map((note) => (
                <li key={note.id}>
                    <strong>{note.title}</strong>
                    <p>{note.text}</p>
                    <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                    <button onClick={() => handleEdit(note.id, note.title, note.text)}>Edit</button>

                </li>
                ))}
        </ul>
    )
}

export default NoteList