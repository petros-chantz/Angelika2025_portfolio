import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectGallery from "./components/ProjectGallery";
import ProjectDetail from "./components/ProjectDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProjectGallery />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}
