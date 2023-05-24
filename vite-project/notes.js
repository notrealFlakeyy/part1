export async function getNotes() {
    const note = JSON.parse(localStorage.getItem('notes'));
    return note ? [...note] : []
}

export async function addNote(note, notes) {
    notes.push(note)
    const msg = localStorage.setItem('notes', JSON.stringify(notes))
    return !msg ? 'Note added' : new Error('something went wrong')
}

export async function editNote(id) {
    const notes = await getNotes()
    const noteIndex = notes.findIndex(note => note.id == id)
    const title = prompt("New title")
    const body = prompt("New note")
    notes.splice(noteIndex, 1, { id: id, title: title, body: body })
    localStorage.setItem("notes", JSON.stringify(notes))
}

export async function deleteNote(id) {
    const notes = await getNotes()
    const filteredNotes = notes.filter(note => note.id !== id)
    localStorage.setItem("notes", JSON.stringify(filteredNotes))
}