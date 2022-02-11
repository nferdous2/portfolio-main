import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Project1 from "./Components/Project1/Project1";
import Project2 from "./Components/Project2/Project2";
import Project3 from "./Components/Project3/Project3";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
