import React from "react";
import Homepage from "./Homepage";

const practicedata = ({games, header}) => {
  return ( 
    <div>
      <h2>{header}</h2>
      {games.map((game) => (
        <div className="practice-game" key={game.id}>
          <h2>Hi, {game.name}</h2>
          <h2>Your remaining score is {game.remainingScore}</h2>
        </div>
      ))}
    </div>
   );
}
 
export default practicedata;