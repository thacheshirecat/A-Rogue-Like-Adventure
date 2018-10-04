import React from 'react';
import { Link } from 'react-router-dom';

function GameOver()
{
  return(
    <div>
      <h3>You lose, good day sir</h3>
      <Link to='/'><button>Home</button></Link>
    </div>
  );
}

export default GameOver;
