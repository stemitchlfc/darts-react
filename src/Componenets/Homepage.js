import React, {useState} from "react";
import Navbar from "./navbar";
import {Link} from 'react-router-dom'

export default function Homepage() {
  return (
    <div>
      <div className="home-div">
      <div className="fzo-home">
      <p>
        This is a practice game with a single player to
        play one leg of 501. At the end of each leg the
        number of darts thrown will be shown to ensure you 
        know what your average was.
      </p>
      <Link className='prac-button' to="/Practice">Practice Game</Link>
      </div>
      <div className="bts-home">
      <p>
        Bob's 27 is a double practice game which you start at
        double one and finish on Bullseye. For every double hit
        you get your score added and for every double missed you 
        have the score taken away from your current score. Aim is to 
        finish the game and not get to 0.
      </p>
      <Link className='bob-button' to="/BobsTs">Bob's 27 Game</Link>
      </div>
      </div>
    </div>  
  );
}
 
