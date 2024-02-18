import "./App.css";
import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import "./styles.css";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);

  return (
    <>
      <Router>
        <Header />
        <div className="body">
          <HeroSection />
          <div className="wrapper">
            <Skills />
            <Experience />
          </div>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <div className="wrapper">
            <Education />
            <Contact />
          </div>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </div>
      </Router>
    </>
  );
}

export default App;
