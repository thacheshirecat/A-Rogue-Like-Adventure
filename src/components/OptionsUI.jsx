import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function OptionsUI(props)
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
  
  return(
    <div>
      <button onClick={() => {handleOptionOne();}}>{props.eventData[props.currentEvent].optionOne.buttonText}</button>
      <hr/>
      <button onClick={() => {handleOptionTwo();}}>{props.eventData[props.currentEvent].optionTwo.buttonText}</button>
      <hr/>
      <button onClick={() => {handleOptionThree();}}>{props.eventData[props.currentEvent].optionThree.buttonText}</button>
      <hr/>
    </div>
  )
}

OptionsUI.propTypes = {
  eventData: PropTypes.object,
  selectedCharacter: PropTypes. object,
  currentEvent: PropTypes.string,
  gamePhase: PropTypes.string
};

export default connect()(OptionsUI);
