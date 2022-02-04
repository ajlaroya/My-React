import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import About from "./routes/about";
import Contact from "./routes/contact";
import Project from "./routes/project";
import { AnimatePresence } from "framer-motion";
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="project" element={<Project />} />
      </Routes>
    </AnimatePresence>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
