import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import "./index.css";
import video from "src/video/video.mp4"
import AppLayout from "./components/layouts/applayout";

import Slides from "./components/region/regionView";
import { IndexPageView } from "./pages/page";



function App() {

  const [activeSlide, setActiveSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  return (
    <HashRouter>
      <div className="App">
      
        <AppLayout activeSlide={activeSlide} isFullscreen ={isFullscreen} setIsFullscreen={setIsFullscreen}>
          <Routes>
            <Route path="/" element={<IndexPageView activeSlide={activeSlide} setActiveSlide={setActiveSlide} isFullscreen ={isFullscreen} setIsFullscreen={setIsFullscreen} />} />
          </Routes>
        </AppLayout>
      </div>
    </HashRouter>
    // <div className="App">

    //   <NavBar/>
    //   <LayoutRoyal/>
    // </div>
  );
}

export default App;
