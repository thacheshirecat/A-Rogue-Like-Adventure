import React from 'react';
import { Link } from 'react-router-dom';

function Main()
{
  return(
    <div>
      <h1>A Rogue Like Adventure</h1>
      <ul>
        <li><Link to='/tutorial'>Highly Recommended Tutorial</Link></li>
        <li><Link to='/newgame'>New Game</Link></li>
      </ul>
    </div>
  );
}

export default Main;
