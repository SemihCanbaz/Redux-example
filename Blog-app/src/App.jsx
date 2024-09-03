import React from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Filter from "./components/Filter";

const App = () => (
    <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Notes App</h1>
        <NoteForm />
        <Filter />
        <NoteList />
    </div>
);

export default App;
