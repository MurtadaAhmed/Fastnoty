const API_URL = "http://localhost:5000/note"

export const fetchNotes = async () => {
    const fetchedNotes = await fetch(API_URL);
    return fetchedNotes.json();
}

export const saveNote = async (note: any) => {
    await fetch(API_URL, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(note)
    })
}