import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function EventUI(props)
{

  function handleOptionOne()
  {

  }

  function handleOptionTwo()
  {

  }

  function handleOptionThree()
  {

  }

  function handleSelectNewEvent()
  {
    let randomEvent = Math.floor(Math.random() * (11 - 1) + 1).toString();
    let newEventTest = (props.selectedCharacter.turnCounter).toString() + '00000' + randomEvent;
    console.log(newEventTest);
    let newEvent = 'intro';
    let nextTurn = (props.selectedCharacter.turnCounter) + 1;
    console.log(props.selectedCharacter.turnCounter);

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
  }

  return(
    <div>
      <style jsx>{`
        h3 {
          text-align: center;
        }
      `}</style>
      <h3>{props.eventData[props.currentEvent].eventName}</h3>
      <div className='card'>
        <p>Event dialogue</p>
      </div>
      <br/>
      <button onClick={() => {handleOptionOne();}}>{props.eventData[props.currentEvent].optionOneText}</button>
      <hr/>
      <button onClick={() => {handleOptionTwo();}}>{props.eventData[props.currentEvent].optionTwoText}</button>
      <hr/>
      <button onClick={() => {handleOptionThree();}}>{props.eventData[props.currentEvent].optionThreeText}</button>

      <div>
        <button onClick={() => {handleSelectNewEvent();}}>Continue</button>
      </div>
    </div>
  );
}

EventUI.propTypes = {
  eventData: PropTypes.object,
  selectedCharacter: PropTypes. object,
  currentEvent: PropTypes.string
};

export default connect()(EventUI);
