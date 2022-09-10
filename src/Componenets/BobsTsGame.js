import React, {useState, useEffect} from 'react'

const BobsTsGame = () => {
  const [game, setGame] = useState({})
  const [data, setData] = useState("")
  const doubles = 1
  const doublesHit = null


  useEffect(() => {
    fetch('http://localhost:8080/BobsTs/1')
      .then(res => {
        return res.json()
      })
      .then((data) => {
        console.log(data) 
        setGame(data)
        
      })
  }, [])
 
  

  const handleSubmitBob = (e) => {
    e.preventDefault()
    console.log('submitted')
    // const game = {name, remainingScore, score}
    fetch('http://localhost:8080/BobsTs/1', {
      method: 'PUT',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ doublesHit: data })
    }).then((res) => {
      return res.json()
    })
      .then((data) => { 
        setData("") 
        setGame({ ...game, 
                score: data.score, 
                doublesHit: data.doublesHit 
                })
      })
  }


  return (
    <div>
      <nav className="practice-nav">
        <h2>Darts Practice</h2>
      </nav>

      <main className="practice-nav">
        <div className="player-name">{game.name}, your remaining score is:</div>
        <div className="practice-rem-score">{game.score}</div>
        <form>
          <input type="number" value={data} onChange={(e) => setData(e.target.value)} />
          <button onClick={handleSubmitBob} type="button">Submit Score</button>
        </form>
        <div>You are aiming for double {doubles}</div>
        <div>{doublesHit}</div>
        {game.gameLost && <div>GAME OVER</div>}
        {game.gameWon && <div>GAME OVER</div>}
      </main>


    </div>
  ) ;
}
 
export default BobsTsGame;