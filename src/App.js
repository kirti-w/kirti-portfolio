import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Home from "./components/home";
import Resume from "./components/resume";
//import ImageGallery from "./components/gallery";
import Projects from "./components/projects";
import Contact from "./components/contact";
import "./App.css";

const App = () => (
  <Router>
    <div className="container">
      <Header className="header" />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kirti-portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/gallery" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <aside className="sidebar social-links">
        <a
          href="https://www.facebook.com/kirti.wadhwani.7"
          target="_blank"
          title="Facebook"
          rel="noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/kirti-wadhwani-63720b9/"
          target="_blank"
          title="LinkedIn"
          rel="noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.instagram.com/kirtiwadhwani20/"
          target="_blank"
          title="Instagram"
          rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://github.com/kirti-w/"
          target="_blank"
          title="GitHub"
          rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </aside>
      <Footer className="footer" />
    </div>
  </Router>
);

export default App;
