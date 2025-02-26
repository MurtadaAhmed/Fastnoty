import {Note} from "../types"
import * as React from "react";

type Props = {
    note: Note,
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

function EditNote({note, notes, setNotes}: Props) {

    const editNote = () => {
        const newTile = prompt("Edit title:", note.title)
        const newText = prompt("Edit your note:", note.text)

        if (newTile && newText && newTile.trim() !== "" && newText.trim() !== "") {
            setNotes(notes.map((n => n.id === note.id ? {...n, title: newTile, text: newText} : n)))
        }

    }

    return <button onClick={editNote}>Edit</button>
}

export default EditNote;