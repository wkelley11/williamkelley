import React from "react";
import "./App.css";
import { NavBar } from "./client/NavBar";
import { Routes, Route } from "react-router-dom";
import { Play, Select } from "./client/Play";
import { Upload } from "./client/Upload";
import { Create } from "./client/Create";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my little crossword app</h1>
        <p>You can upload a crossword file and then play the game!</p>
        <NavBar />
      </header>
      <div className="App-body">
        {/* <a href="https://northeasternairquality.com">Bob's Link</a> */}
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/play" element={<Select />} />
          <Route path="/play/:name" element={<Play />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
