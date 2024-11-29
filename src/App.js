import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Home from "./components/home";
import Interests from "./components/interests";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import "./App.css";

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
