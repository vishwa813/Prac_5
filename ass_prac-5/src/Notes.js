import React, { useState } from 'react';
import './App.css';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [noteText, setNoteText] = useState('');

    const handleAddNote = () => {
        if (noteText.trim()) {
            const newNote = {
                text: noteText,
                timestamp: new Date().toLocaleString()
            };
            setNotes([...notes, newNote]);
            setNoteText('');
        }
    };

    const handleDeleteNote = (index) => {
        const newNotes = notes.filter((_, i) => i !== index);
        setNotes(newNotes);
    };

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <input
                    type="text"
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Enter your note"
                />
                <button onClick={handleAddNote}>Add Note</button>
            </div>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>
                        <span>{note.text}</span>
                        <span> - {note.timestamp}</span>
                        <button onClick={() => handleDeleteNote(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notes;