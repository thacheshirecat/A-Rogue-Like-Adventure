import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function OptionsUI(props)
{

  function handleOptionOne()
  {
    let randomEvent = Math.floor(Math.random() * (11 - 1) + 1).toString();
    let newEvent = (props.selectedCharacter.turnCounter + 1).toString() + '00000' + randomEvent;

    const { dispatch } = props;
    const action = {
      type: 'CHANGE_PHASE',
      phase: 'continue'
    };
    dispatch(action);

    if(props.eventData[props.currentEvent].optionOne.eventType === 'sneak')
    {
      if(props.selectedCharacter.sneaky < props.eventData[props.currentEvent].optionOne.skillTarget)
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.missText
        };
        dispatch(action);
      }
      else if(props.selectedCharacter.sneaky === props.eventData[props.currentEvent].optionOne.skillTarget)
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.tieText
        };
        dispatch(action);
      }
      else
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.successText
        };
        dispatch(action);
      }
    }
    const finalAction = {
      type: 'CHANGE_EVENT',
      eventId: newEvent
    };
    dispatch(finalAction);
  }

  function handleOptionTwo()
  {
    const { dispatch } = props;
    const action = {
      type: 'CHANGE_PHASE',
      phase: 'continue'
    };
    dispatch(action);
  }

  function handleOptionThree()
  {
    const { dispatch } = props;
    const action = {
      type: 'CHANGE_PHASE',
      phase: 'continue'
    };
    dispatch(action);
  }

  return(
    <div>
      <button onClick={() => {handleOptionOne();}}>{props.eventData[props.currentEvent].optionOne.buttonText}</button>
      <hr/>
      <button onClick={() => {handleOptionTwo();}}>{props.eventData[props.currentEvent].optionTwo.buttonText}</button>
      <hr/>
      <button onClick={() => {handleOptionThree();}}>{props.eventData[props.currentEvent].optionThree.buttonText}</button>
      <hr/>
    </div>
  );
}

OptionsUI.propTypes = {
  eventData: PropTypes.object,
  selectedCharacter: PropTypes. object,
  currentEvent: PropTypes.string,
  gamePhase: PropTypes.string,
  currentDialogue: PropTypes.string
};

export default connect()(OptionsUI);
