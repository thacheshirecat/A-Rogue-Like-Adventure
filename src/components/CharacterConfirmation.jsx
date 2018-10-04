import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function CharacterConfirmation(props)
{
  let deselectedCharacter = {};

  function handleDeselectingCharacter(deselectedCharacter)
  {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_CHARACTER',
      character: deselectedCharacter
    };
    dispatch(action);
  }

  function handleStartingGame()
  {
    const { dispatch } = props;
    const action = {
      type: 'CHANGE_PHASE',
      phase: 'options'
    };
    dispatch(action);

    const action2 = {
      type: 'CHANGE_DIALOGUE',
      dialogue: props.eventData[props.currentEvent].eventInitialText
    };
    dispatch(action2);
  }

  return(
    <div className='card'>
      <style jsx>{`
          h4, h3 {
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
      <h3>You Have Selected: {props.selectedCharacter.name}</h3>
      <h4>Are You Sure?</h4>
      <div>
        <Link to='/game'><button className='button1' onClick={() => {handleStartingGame();}}>Yes</button></Link><button className='button2' onClick={() => {handleDeselectingCharacter(deselectedCharacter);}}>No</button>
      </div>
    </div>
  );
}

CharacterConfirmation.propTypes = {
  eventData: PropTypes.object,
  selectedCharacter: PropTypes.object,
  currentEvent: PropTypes.string,
  gamePhase: PropTypes.string,
  dispatch: PropTypes.func
};

export default connect()(CharacterConfirmation);
