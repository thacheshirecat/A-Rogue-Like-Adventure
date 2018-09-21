import React from 'react';
import { Link } from 'react-router-dom';

function CharacterConfirmation()
{
  return(
    <div className='card'>
      <style jsx>{`
          h4 {
            text-align: center;
          }
          .button1 {
            width: 50px;
            margin: auto;
            float: left;
          }
          .button2 {
            width: 50px;
            margin: auto;
            float: right;
          }
          .card {
            width: 250px;
            margin: auto;
          }
      `}</style>
      <h4>Are You Sure?</h4>
      <div>
        <Link to='/game'><button className='button1'>Yes</button></Link><button className='button2'>No</button>
      </div>
    </div>
  );
}

export default CharacterConfirmation;
