import {Note} from "../types.ts";

type NoteListPros = {
    notes: Note[];
    onDeleteNote: (id: number) => void;
}

function NoteList({notes, onDeleteNote}: NoteListPros) {
    return (
        <ul>
            {notes.map((note) => (
                <li key={note.id}>
                    {note.text}
                    <button onClick={() => onDeleteNote(note.id)}>Delete</button>

                </li>
                ))}
        </ul>
    )
}

export default NoteList