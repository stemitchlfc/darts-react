import React, { useEffect, useState } from "react";
import practicedata from "./practicedata";

export default function Practice() {
  const [game, setGame] = useState({})
  const [data, setData] = useState(null)


  useEffect(() => {
    fetch('http://localhost:3005/practicegame/')
      .then(res => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setGame(data)

      })
  }, [])



  const handleSubmit = (e) => {
    console.log(data)
    e.preventDefault()
    // const game = {name, remainingScore, score}
    fetch('http://localhost:3005/practicegame', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ score: data })
    }).then((res) => {
      return res.json()
    })
      .then((data) => {
        setData("")
        setGame({ ...game, remainingScore: data.remainingScore })
      })
  }

  

  return (
    <div>
      <nav className="practice-nav">
        <h2>Darts Practice</h2>
      </nav>

      <main className="practice-nav">
        <div className="player-name">{game.name}, your remaining score is:</div>
        <div className="practice-rem-score">{game.remainingScore}</div>
        <form>
          <input type="number" value={data} onChange={(e) => setData(e.target.value)} />
          <button onClick={handleSubmit} type="button">Submit Score</button>
        </form>
      </main>


    </div>
  )
}
