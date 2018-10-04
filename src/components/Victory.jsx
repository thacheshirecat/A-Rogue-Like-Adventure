import React from 'react';
import { Link } from 'react-router-dom';

function Victory()
{
  return(
    <div>
      <h3>You win, good day sir</h3>
      <Link to='/'><button>Home</button></Link>
    </div>
  );
}

export default Victory;
