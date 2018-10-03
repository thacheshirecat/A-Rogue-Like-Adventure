import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContinueUI from './ContinueUI';

function EventUI(props)
{

  function handleOptionOne()
  {
    const { dispatch } = props;
    const action3 = {
      type: 'CHANGE_PHASE',
      phase: 'continue'
    };
    dispatch(action3);
  }

  function handleOptionTwo()
  {
    const { dispatch } = props;
    const action3 = {
      type: 'CHANGE_PHASE',
      phase: 'continue'
    };
    dispatch(action3);
  }

  function handleOptionThree()
  {
    const { dispatch } = props;
    const action3 = {
      type: 'CHANGE_PHASE',
      phase: 'continue'
    };
    dispatch(action3);
  }

  let textToDisplay = props.eventData[props.currentEvent].eventInitialText;
  let continueDiv = null;
  if(props.gamePhase === 'continue')
  {
    continueDiv = <ContinueUI
      eventData={props.eventData}
      currentEvent={props.currentEvent}
      selectedCharacter={props.selectedCharacter}
      gamePhase={props.gamePhase}/>;
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
        <p>{textToDisplay}</p>
      </div>
      <br/>
      <button onClick={() => {handleOptionOne();}}>{props.eventData[props.currentEvent].optionOne.buttonText}</button>
      <hr/>
      <button onClick={() => {handleOptionTwo();}}>{props.eventData[props.currentEvent].optionTwo.buttonText}</button>
      <hr/>
      <button onClick={() => {handleOptionThree();}}>{props.eventData[props.currentEvent].optionThree.buttonText}</button>
      <hr/>

      <div>
        {continueDiv}
      </div>
    </div>
  );
}

EventUI.propTypes = {
  eventData: PropTypes.object,
  selectedCharacter: PropTypes. object,
  currentEvent: PropTypes.string,
  gamePhase: PropTypes.string
};

export default connect()(EventUI);
