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
      <div>To create a practice game please enter your name:</div>
      <form>
        <label>Name of Player</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Starting Score</label>
        <select 
            type="number" 
            value={remainingScore}
            onChange={(e) => setRemainingScore(e.target.value)}
             
        >
          <option value='501'>501</option>
          <option value='301'>301</option>
        </select>
        
      </form>
      <button onClick={handleSubmit} type="button">Create Game</button>
      
      { gameOn && <PracticeGame id={game.id}/>      }
    </div>
   );
}
 
export default CreatePracticeGame;