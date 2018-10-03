import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function ContinueUI(props)
{

  function handleMoveToNextEvent()
  {
    let nextTurn = (props.selectedCharacter.turnCounter) + 1;

    const { dispatch } = props;
    const action = {
      type: 'ADVANCE_TURN',
      newTurn: nextTurn
    };
    dispatch(action);

    const action2 = {
      type: 'CHANGE_PHASE',
      phase: 'options'
    };
    dispatch(action2);

    const action3 = {
      type: 'CHANGE_DIALOGUE',
      dialogue: props.eventData[props.currentEvent].eventInitialText
    };
    dispatch(action3);
  }

  return(
    <div>
      <button onClick={() => {handleMoveToNextEvent();}}>Continue</button>
    </div>
  );
}

ContinueUI.propTypes = {
  eventData: PropTypes.object,
  selectedCharacter: PropTypes. object,
  currentEvent: PropTypes.string,
  gamePhase: PropTypes.string,
  currentDialogue: PropTypes.string
};

export default connect()(ContinueUI);
