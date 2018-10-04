import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function ContinueUI(props)
{

  function handleMoveToNextEvent()
  {
    let nextTurn = (props.selectedCharacter.turnCounter) + 1;
    const { dispatch } = props;

    if(props.selectedCharacter.hp > 0 && props.selectedCharacter.turnCounter < 10)
    {
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
    else if(props.selectedCharacter.hp > 0 && props.selectedCharacter.turnCounter >= 10)
    {
      const action = {
        type: 'CHANGE_PHASE',
        phase: 'victory'
      };
      dispatch(action);
    }
    else
    {
      const action = {
        type: 'CHANGE_PHASE',
        phase: 'gameover'
      };
      dispatch(action);
    }
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
  currentDialogue: PropTypes.string,
  dispatch: PropTypes.func
};

export default connect()(ContinueUI);
