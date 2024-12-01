import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Home from "./components/home";
import Interests from "./components/interests";
import ImageGallery from "./components/gallery";
import Contact from "./components/contact";
import "./App.css";

const App = () => (
  <Router>
    <div className="container">
      <Header className="header" />
      <main className="main-content">
        <Routes>
          <Route path="/kirti-portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <aside className="sidebar social-links">
        <a
          href="https://www.facebook.com"
          target="_blank"
          title="Facebook"
          rel="noreferrer">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          title="LinkedIn"
          rel="noreferrer">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          title="Twitter"
          rel="noreferrer">
          <i class="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          title="Instagram"
          rel="noreferrer">
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          title="GitHub"
          rel="noreferrer">
          <i class="fab fa-github"></i>
        </a>
      </aside>
      <Footer className="footer" />
    </div>
  </Router>
);

export default App;
