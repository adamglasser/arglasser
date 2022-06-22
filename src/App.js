
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./routes/about/about";
import Home from "./routes/home/Home";

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
