import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Scrollbar } from './components/Scrollbar';
import Dashboard from './components/Chart/Chart';
import Sidebar from './components/Sidebar';
import { Header } from './components/Header';
import LayoutRoyal from './components/Layout/LayoutRoyal';
import NavBar from './components/Layout/NavBar';

function App() {
  return (
    <div className="App">
 {/* <Header/>
      <Dashboard/>
      <Sidebar/> */}
      <NavBar/>
      <LayoutRoyal/>
    </div>
  );
}

export default App;
