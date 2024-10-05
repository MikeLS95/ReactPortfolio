import { Routes, Route } from "react-router-dom";
import Home from "./routes/coreRoutes/Home";
import AboutMe from "./routes/coreRoutes/AboutMe";
import Contact from "./routes/coreRoutes/Contact";
import NavBar from "./components/NavBar";
import Tech from "./routes/coreRoutes/Tech";
import Projects from "./routes/coreRoutes/Projects";
import "./output.css"

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;
