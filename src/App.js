import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Scrollbar } from "./components/Scrollbar";
import Dashboard from "./components/Chart/Chart";
import Sidebar from "./components/Sidebar";
import { Header } from "./components/Header";
import LayoutRoyal from "./components/Layout/LayoutRoyal";
import NavBar from "./components/Layout/NavBar";
import AppLayout from "./components/layouts/applayout";
import DashboardLayout from "./components/dashboard/layout";
import DashboardRoyal from "./components/dashboard/dashboard";
import Region from "./components/region/regionView";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <AppLayout>
          <Routes>
            <Route path="/" element={<Region />} />
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
