import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import Navbar from "./navigation/Navbar";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";

function App() {
  return (
    <Router>
      <div>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
