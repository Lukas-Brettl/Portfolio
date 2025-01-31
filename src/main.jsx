import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import Home from './Home.js';
import Projects from "./Projects.js";
import Technologies from "./Technologies.js";
import Calculator from "./try/Calculator.js";
import ResearchCountry from "./try/ResearchCountry.js";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/searchCountry" element={<ResearchCountry />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  </BrowserRouter>
);
