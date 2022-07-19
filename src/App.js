
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./routes/about/About";
import Home from "./routes/home/Home";
import Work from "./routes/work/work";

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Work" element={<Work />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
