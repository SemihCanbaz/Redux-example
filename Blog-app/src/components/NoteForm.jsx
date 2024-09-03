import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../slices/notesSlice";

const NoteForm = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleAddNote = () => {
        if (text) {
            dispatch(actions.addNote(text));
            setText("");
        }
    };

    return (
        <div className="mb-4">
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="border p-2 rounded"
                placeholder="Add a new note"
            />
            <button
                onClick={handleAddNote}
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add
            </button>
        </div>
    );
};

export default NoteForm;
