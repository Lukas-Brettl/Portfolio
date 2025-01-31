import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes and Route

import './index.css'
import Home from './Home.jsx'
import Projects from "./Projects.jsx";
import Technologies from "./Technologies.jsx"
import Calculator from "./try/Calculator.jsx";
import ResearchCountry from "./try/ResearchCountry.jsx"

createRoot(document.getElementById('root'), {
  future: {
    v7_startTransition: true,
  },
}).render(
  <BrowserRouter basename="/Portfolio" future={{
    v7_relativeSplatPath: true,
  }}>
      <Routes>
        <Route path="projects" element={<Projects/>}/>
        <Route path="technologies" element={<Technologies/>}/>
        <Route path="searchCountry" element={<ResearchCountry/>}/>
        <Route path="calculator" element={<Calculator/>}/>
        <Route index element={<Home/>}/>
      </Routes>
  </BrowserRouter>
)
