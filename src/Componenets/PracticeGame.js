import React, { useEffect, useState } from "react";


export default function PracticeGame(props) {
  const [game, setGame] = useState({})
  const [data, setData] = useState()
  const [dartsCounted, setDartsCounted] =useState(false)
  const url = `http://localhost:8080/practice/${props.id}`
  

  useEffect(() => {
    console.log(url)
    fetch(url)
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
    fetch(url, {
      method: 'PUT',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ score: data })
    }).then((res) => {
      return res.json()
    })
      .then((data) => {
        setData("")
        console.log(data)
        setGame({ ...game, 
                  remainingScore: data.remainingScore, 
                  counter: data.counter,
                  onFinish: data.onFinish,
                  legWon: data.legWon,
                  score: data.score
                })
      })
  }

  const handleDoubleSubmit =(e) => {
    e.preventDefault()
    fetch(url, {
      method: 'PUT',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({dartsAtDouble: data})
    }).then((res) => {
      return res.json()
    })
      .then((data) => {
        setData("")
        setGame({...game, dartsAtDouble: data.dartsAtDouble})
        setDartsCounted(true)
      })
  }

  return (
    <div className="practice-game">
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
        {game.onFinish && <div>You are on a finish</div>}
        <div>You have thrown {game.counter} darts</div>
        <div>Your last score was {game.score}</div>
        {game.legWon && 
          <div>
            <form>
              <input type="number" value={data} onChange={(e) => setData(e.target.value)}/>
              <button onClick={handleDoubleSubmit} type="button">Submit Darts at Double</button>
            </form>
          </div>}
        {dartsCounted && <div>Well Done! Leg Complete in {game.counter + game.dartsAtDouble} darts</div>}
      </main>
    </div>
  )
}
