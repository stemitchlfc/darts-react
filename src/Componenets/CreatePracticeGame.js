import React, {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import PracticeGame from "./PracticeGame"

const CreatePracticeGame = () => {
  const [returnData, setReturnData] = useState({})
  const [game, setGame] =useState({})
  var score = 0
  const [name, setName] = useState('')
  const [remainingScore, setRemainingScore] = useState()
  const [gameOn, setGameOn] = useState(false)



  const handleSubmit = (e) => {
    console.log(name)
    console.log(remainingScore)
    e.preventDefault()
    const game = {name,
                  remainingScore,
                  score, 
                  onFinish: false, 
                  counter: 0, 
                  dartsAtDouble: 0, 
                  legWon: false}
    
    fetch('http://localhost:8080/practice/', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(game)
    }).then((res) => {
      return res.json()
    }) 
      .then((data) => {
        
        setReturnData(data)
        console.log(data)
        console.log(data.id)
        
        setGame(game)
        setGameOn(true)
        
        
      })
  }

  return ( 
    <div>
      <div className="create-prac">
        <h2>Create a Practice Game</h2>
      <div className="create-prac-text">To create a practice game please enter your name:</div>
      <form className="create-form">
        <label className="create-text">Name of Player</label>
        <input className='create-input' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Starting Score</label>
        <select  
            className="create-score"
            type="number" 
            value={remainingScore}
            onChange={(e) => setRemainingScore(e.target.value)}
             
        >
          <option value='501'>501</option>
          <option value='301'>301</option>
        </select>
        
      </form>
      <button className='create-submit' onClick={handleSubmit} type="button">Create Game</button>
    </div>  
      { gameOn && <PracticeGame id={returnData.id} />      }
    </div>
   );
}
 
export default CreatePracticeGame;