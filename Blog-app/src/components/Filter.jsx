import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../slices/notesSlice";

const Filter = () => {
    const dispatch = useDispatch();

    return (
        <div className="mb-4">
            <button
                onClick={() => dispatch(actions.setFilter("all"))}
                className="mr-2 bg-gray-500 text-white px-4 py-2 rounded"
            >
                All
            </button>
            <button
                onClick={() => dispatch(actions.setFilter("completed"))}
                className="mr-2 bg-gray-500 text-white px-4 py-2 rounded"
            >
                Completed
            </button>
            <button
                onClick={() => dispatch(actions.setFilter("incomplete"))}
                className="bg-gray-500 text-white px-4 py-2 rounded"
            >
                Incomplete
            </button>
        </div>
    );
};

export default Filter;
