import React, {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import PracticeGame from "./PracticeGame"
import CreatePracticeGame from "./CreatePracticeGame"

const PracticePage = () => {
  return ( 
    <div>
      <CreatePracticeGame />
      
    </div>
   );
}
 
export default PracticePage;
