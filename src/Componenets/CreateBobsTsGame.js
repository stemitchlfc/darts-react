import React, {useState, useEffect} from "react";
import BobsTsGame from "./BobsTsGame";


export default function CreateBobsTsGame() {
  const [returnData, setReturnData] = useState({})
  const [game, setGame] =useState({})
  var score = 0
  const [name, setName] = useState('')
  const [remainingScore, setRemainingScore] = useState()
  const [gameOn, setGameOn] = useState(false)
  
  const doublesHit = 0

  const handleSubmit = (e) =>{
    console.log(name)
    e.preventDefault()
    const game = {name,
                  doubles: 1,
                  doublesHit,
                  score: 27,
                  gameWon: false,
                  gameLost: false
                  }
    console.log(game)
    fetch('http://localhost:8080/BobsTs/', {
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
        console.log(data)
        console.log(data.id)
        setReturnData(data)
        console.log(data)
        console.log(data.id)
        setGame(game)
        setGameOn(true)
      })}
    

  return (
    <div>
      <div>To create a game of Bobs 27 please enter your name</div>
      <form>
        <label>Name of Player</label>
        
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleSubmit} type="button">Create Game</button>      
      </form>
      {gameOn && <BobsTsGame />}
    </div>
  )
}