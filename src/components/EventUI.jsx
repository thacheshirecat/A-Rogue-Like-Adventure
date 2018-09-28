import React from 'react';
import PropTypes from 'prop-types';

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
    </div>
  );
}

EventUI.propTypes = {
  eventData: PropTypes.object,
  currentEvent: PropTypes.string
};

export default EventUI;
