
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import PrevJobs from "./components/PrevJobs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";




export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <PrevJobs />
      <Footer />
    </main>
  );
}
