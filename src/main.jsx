import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import Home from './Home.jsx';
import Projects from "./Projects.jsx";
import Technologies from "./Technologies.jsx";
import Calculator from "./try/Calculator.jsx";
import ResearchCountry from "./try/ResearchCountry.jsx";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter basename="/Portfolio"> {/* NE import.meta.env.BASE_URL */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/searchCountry" element={<ResearchCountry />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  </BrowserRouter>
);
