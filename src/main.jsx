import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes and Route
import { StrictMode } from 'react'
import './index.css'
import Home from './Home.jsx'
import Projects from "./Projects.jsx";
import Technologies from "./Technologies.jsx"


createRoot(document.getElementById('root'), {
  future: {
    v7_startTransition: true,
  },
}).render(
  <BrowserRouter   future={{
    v7_relativeSplatPath: true,
  }}>
    <StrictMode>
      <Routes>
        <Route path="projects" element={<Projects/>}/>
        <Route path="technologies" element={<Technologies/>}/>
        <Route index element={<Home/>}/>
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
