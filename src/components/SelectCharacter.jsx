import React from 'react';

import CharacterConfirmation from './CharacterConfirmation';
import characterPortrait from './../assets/images/Temp-Character-Portrait.jpg';

function SelectCharacter()
{

  let confirmationDiv = <CharacterConfirmation/>;

  return(
    <div>
      <style jsx>{`
          img {
            width: 50px;
            border: 2px solid black;
            float: left;
          }
          .card {
            background-color: crimson;
          }
      `}</style>
      <h1> Select Character</h1>
      <div className='card'>
        <div>
          <img src={characterPortrait}/>
          <h3>Name: Name 1</h3>
        </div>
        <p>Description: Description 1</p>
      </div>
      <hr/>
      <div className='card'>
        <div>
          <img src={characterPortrait}/>
          <h3>Name: Name 2</h3>
        </div>
        <p>Description: Description 2</p>
      </div>
      <hr/>
      <div className='card'>
        <div>
          <img src={characterPortrait}/>
          <h3>Name: Name 3</h3>
        </div>
        <p>Description: Description 3</p>
      </div>
      <br/>
      <div>
        {confirmationDiv}
      </div>
    </div>

  );
}

export default SelectCharacter;
