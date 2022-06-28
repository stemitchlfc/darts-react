import React, {useEffect, useState} from "react";


export default function Match(props) {
  
  
  const [data, setData] = useState([{}])
  const [users, setUsers] = useState([
    {name: "Ste", remainingScore: 1, userId: 1},
     {name: "paul", remainingScore: 1, userId: 2}
    ])

  useEffect(() => {
    fetch(`http://localhost:8001/match/`)
      .then(res => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setUsers(data)
      })
  }, [])
    
 
  const handleSubmit = (e) => {
    e.preventDefault()
    // const game = {name, remainingScore, score}
    fetch('http://localhost:3005/match', {
      method: 'POST',
      headers: {"Content-Type": "application.json"},
      body: JSON.stringify({score: e.target.value})
    }).then((res) => {
      return res.json()
    })
    .then((data) => {
      setData("")
      setUsers({...users, remainingScore: data.remainingScore})
    })
  }
  
  
  return (
    <div>
      <nav className="practice-nav">
        <h2>Darts Match</h2>
      </nav>
      
        <main className="practice-nav">

        {users.map((user) => (
        <div className="user-preview" key={user.userId}>
          <h2>your name is {user.name}</h2>
          <h4>your remaining score is {user.remainingScore}</h4>
        </div>
      ))}
        <form>
          <input type="number" value={data} onChange={(e) => setData(e.target.value)}/>
          <button onClick={handleSubmit} type="button">Submit Score</button>
        </form>
      </main>
      <form>
          <input type="number" value={data} onChange={(e) => setData(e.target.value)}/>
          <button onClick={handleSubmit} type="button">Submit Score</button>
        </form>
      
      
      
    </div>
  )
  }