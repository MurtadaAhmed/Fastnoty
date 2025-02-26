import * as React from "react";

type Props = {
    id: number;
    notes: any[];
    setNotes: React.Dispatch<React.SetStateAction<any[]>>
}

function DeleteNote ({id, notes, setNotes}: Props) {
    const deleteNote = () => {
        setNotes(notes.filter(note => note.id !== id))
    };

    return <button className='delete-note-button' onClick={deleteNote}>Delete</button>
}

export default DeleteNote