import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'


import Home from "./pages/Home";
import Project from './pages/Project';
// import Portfolio from "./pages/Portfolio";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/projects/:name" element={<Project />} />
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        </Routes>
      </BrowserRouter>
    </StrictMode>
)