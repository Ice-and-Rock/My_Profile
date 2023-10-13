import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <HomePage />
    </div>
  );
}

export default App;
