import {Note} from "../types"
import EditNote from "./EditNote.tsx"
import DeleteNote from "./DeleteNote.tsx"
import {convertTimeStamp} from "./convertTimeStampToDate.tsx"

type Props = {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

function ListNotes({ notes, setNotes}: Props) {

    const sortedNotesDescendingOrder = [...notes].sort((a, b) => Number(b.id) - Number(a.id))

    return (
        <ul>
            {sortedNotesDescendingOrder.map((note: Note) =>
                <li key={note.id}>
                    <strong>📝 {note.title}</strong>
                    <p>{note.text}</p>
                    <p>{convertTimeStamp(note.id)}</p>
                    <EditNote note={note} setNotes={setNotes} notes={notes} />
                    <DeleteNote id={note.id} setNotes={setNotes} notes={notes}/>
                </li>
            )}
        </ul>
    )
}

export default ListNotes;