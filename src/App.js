
import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Toaster } from 'react-hot-toast';

import About from "./routes/about/About";
import Contact from "./routes/contact/contact";
import Home from "./routes/home/Home";
import Work from "./routes/work/Work";
import Resume from "./routes/resume/Resume";

function App() {
  useEffect(() => {
    import('preline');
  }, []);
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
