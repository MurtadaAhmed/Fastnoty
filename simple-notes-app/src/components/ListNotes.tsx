import {Note} from "../types"
import EditNote from "./EditNote.tsx"
import DeleteNote from "./DeleteNote.tsx"

type Props = {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

function ListNotes({ notes, setNotes}: Props) {
    return (
        <ul>
            {notes.map((note: Note) =>
                <li key={note.id}>
                    <strong>📝 {note.title}</strong>
                    <p>{note.text}</p>
                    <EditNote note={note} setNotes={setNotes} notes={notes} />
                    <DeleteNote id={note.id} setNotes={setNotes} notes={notes}/>
                </li>
            )}
        </ul>
    )
}

export default ListNotes;