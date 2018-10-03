import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function ContinueUI(props)
{

  function handleSelectNewEvent()
  {
    let randomEvent = Math.floor(Math.random() * (11 - 1) + 1).toString();
    let newEvent = (props.selectedCharacter.turnCounter + 1).toString() + '00000' + randomEvent;
    let nextTurn = (props.selectedCharacter.turnCounter) + 1;

    const { dispatch } = props;
    const action = {
      type: 'CHANGE_EVENT',
      eventId: newEvent
    };
    dispatch(action);

    const action2 = {
      type: 'ADVANCE_TURN',
      newTurn: nextTurn
    };
    dispatch(action2);

    const action3 = {
      type: 'CHANGE_PHASE',
      phase: 'options'
    };
    dispatch(action3);
  }

  return(
    <div>
      <button onClick={() => {handleSelectNewEvent();}}>Continue</button>
    </div>
  );
}

ContinueUI.propTypes = {
  eventData: PropTypes.object,
  selectedCharacter: PropTypes. object,
  currentEvent: PropTypes.string,
  gamePhase: PropTypes.string
};

export default connect()(ContinueUI);
