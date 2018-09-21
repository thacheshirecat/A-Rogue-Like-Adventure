import React from 'react';

import characterPortrait from './../assets/images/Temp-Character-Portrait.jpg';

function SelectCharacter(props)
{
  return(
    <div>
      <style jsx>{`
          img {
            width: 50px;
          }
      `}</style>
      <h1> Select Character</h1>
      <div className='card'>
        <img src={characterPortrait}/>
        <h3>Name: Name 1</h3>
        <p>Description: Description 1</p>
      </div>
    </div>

  );
}

export default SelectCharacter;
