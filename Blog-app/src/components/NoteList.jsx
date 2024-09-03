import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../slices/notesSlice";

const NoteList = () => {
    const { items, filter } = useSelector((state) => state.notes);
    const dispatch = useDispatch();

    const filteredNotes = items.filter((note) =>
        filter === "all"
            ? true
            : filter === "completed"
            ? note.completed
            : !note.completed
    );

    return (
        <ul>
            {filteredNotes.map((note) => (
                <li
                    key={note.id}
                    className="flex justify-between items-center mb-2"
                >
                    <span className={note.completed ? "line-through" : ""}>
                        {note.text}
                    </span>
                    <div>
                        <button
                            onClick={() =>
                                dispatch(actions.toggleNote(note.id))
                            }
                            className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                        >
                            Toggle
                        </button>
                        <button
                            onClick={() =>
                                dispatch(actions.removeNote(note.id))
                            }
                            className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Remove
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default NoteList;
