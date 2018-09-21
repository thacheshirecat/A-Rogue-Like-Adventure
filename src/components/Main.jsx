import React from 'react';
import { Link } from 'react-router-dom';

function Main()
{
  return(
    <div>
      <h1>A Rogue Like Adventure</h1>
      <ul>
        <li><Link to='/newgame'>Highly Recommended Tutorial</Link></li>
        <li>New Game</li>
      </ul>
    </div>
  );
}

export default Main;
