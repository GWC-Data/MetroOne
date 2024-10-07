import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Scrollbar } from './components/Scrollbar';
import Dashboard from './components/Chart/Chart';
import Sidebar from './components/Sidebar';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
 <Header/>
      <Dashboard/>
      <Sidebar/>
    </div>
  );
}

export default App;
