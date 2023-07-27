import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Homepage } from "./components/home/homepage";
import { DemoForm } from "./components/form/demoForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/form" element={<DemoForm />} />
      </Routes>
    </Router>
  );
}

export default App;
