import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import AppLayout from "./components/layouts/applayout";

import Slides from "./components/region/regionView";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <AppLayout>
          <Routes>
            <Route path="/" element={<Slides />} />
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
