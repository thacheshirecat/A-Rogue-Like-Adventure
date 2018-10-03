import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CharacterConfirmation from './CharacterConfirmation';
import characterPortrait from './../assets/images/Temp-Character-Portrait.jpg';

function SelectCharacter(props)
{
  let confirmationDiv = null;
  if (Object.keys(props.selectedCharacter).length > 0)
  {
    confirmationDiv = <CharacterConfirmation selectedCharacter={props.selectedCharacter} gamePhase={props.gamePhase}/>;
  }

  function handleSelectingCharacter(character)
  {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_CHARACTER',
      character: character
    };
    dispatch(action);
  }

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
      <h1>Select Character</h1>
      <div className='card' onClick={() => {handleSelectingCharacter(props.characterData[1]);}}>
        <div>
          <img src={characterPortrait}/>
          <h3>Name: {props.characterData[1].name}</h3>
        </div>
        <p>Description: {props.characterData[1].description}</p>
      </div>
      <hr/>
      <div className='card' onClick={() => {handleSelectingCharacter(props.characterData[2]);}}>
        <div>
          <img src={characterPortrait}/>
          <h3>Name: {props.characterData[2].name}</h3>
        </div>
        <p>Description: {props.characterData[2].description}</p>
      </div>
      <hr/>
      <div className='card' onClick={() => {handleSelectingCharacter(props.characterData[3]);}}>
        <div>
          <img src={characterPortrait}/>
          <h3>Name: {props.characterData[3].name}</h3>
        </div>
        <p>Description: {props.characterData[3].description}</p>
      </div>
      <br/>
      <div>
        {confirmationDiv}
      </div>
    </div>

  );
}

SelectCharacter.propTypes = {
  characterData: PropTypes.object.isRequired,
  selectedCharacter: PropTypes.object.isRequired,
  currentEvent: PropTypes.string,
  gamePhase: PropTypes.string,
  dispatch: PropTypes.func
};

export default connect()(SelectCharacter);
