import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Values from "./pages/Values";
import Calculator from "./pages/Calculator";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import OurServices from "./pages/OurServices";

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar added */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/values" element={<Values />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<OurServices />} />
      </Routes>
      <Footer /> {/* ✅ Footer added */}
    </Router>
  );
}

export default App;