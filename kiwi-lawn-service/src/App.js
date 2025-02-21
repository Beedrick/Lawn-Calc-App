import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Values from "./pages/Values";
import Calculator from "./pages/Calculator";
import Navbar from "./components/Navbar"; // ✅ Import Navbar

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar added */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/values" element={<Values />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;