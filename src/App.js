import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, {useEffect, useState} from "react";
import './App.css';
import Practice from './Componenets/practice';
import Navbar from './Componenets/navbar';
import Homepage from './Componenets/Homepage';
import Match from './Componenets/Match';
import BobsTs from "./Componenets/BobsTs";


function App() {
  
 
  return (
    <Router>
    
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Homepage/>} />
          
        <Route path="/practice" element={<Practice/>} />
        <Route path="/match" element={<Match />}></Route>
        <Route path="/BobsTs" element={<BobsTs />} />
      </Routes>
      
      
    
    </Router>
  );
}

export default App;
