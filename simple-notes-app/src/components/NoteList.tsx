import {Note} from "../types.ts";

type NoteListPros = {
    notes: Note[];
    onDeleteNote: (id: number) => void;
    onEditNote: (id: number,newTitle: string, newText: string) => void;
}

function NoteList({notes, onDeleteNote, onEditNote}: NoteListPros) {
    /*
    1. {notes, onDeleteNote, onEditNote}:
    - these functions are imported from App.tsx
     <NoteList notes={notes} onDeleteNote={deleteNote} onEditNote={editNote}/>
    2. handleEdit:
    - this function list the notes, imported from App.tsx
    - edit button captures the id, new title and new text and passes it to editNote function in App.tsx
    onEditNote(id, newTitle, newText)
    - delete button captures the id then it passes it to deleteNote function in App.tsx
    onDeleteNote(note.id)
     */

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
                    <strong>📝 {note.title}</strong>
                    <p>{note.text}</p>

                    <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                    <button onClick={() => handleEdit(note.id, note.title, note.text)}>Edit</button>

                </li>
                ))}
        </ul>
    )
}

export default NoteList