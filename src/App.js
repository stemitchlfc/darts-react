import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, {useEffect, useState} from "react";
import './App.css';
import Practice from './Componenets/PracticeGame';
import Navbar from './Componenets/navbar';
import Homepage from './Componenets/Homepage';

import BobsTsPage from "./Componenets/BobsTsPage";
import CreatePracticeGame from "./Componenets/CreatePracticeGame";
import PracticeGame from "./Componenets/PracticeGame";
import PracticePage from "./Componenets/PracticePage";


function App() {
  
 
  return (
    <Router>
    
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Homepage/>} />
          
        <Route path="/practice" element={<PracticePage />} />
        
        <Route path="/BobsTs" element={<BobsTsPage />} />
        <Route path= "/CreatePractice" element={<CreatePracticeGame />} />
      </Routes>
      
      
    
    </Router>
  );
}

export default App;
