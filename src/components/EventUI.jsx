import React from 'react';
import PropTypes from 'prop-types';

function EventUI(props)
{
  return(
    <div>
      <style jsx>{`
        h3 {
          text-align: center;
        }
      `}</style>
      <h3>{props.eventData['1'].eventName}</h3>
      <div className='card'>
        <p>Event dialogue</p>
      </div>
      <br/>
      <button>{props.eventData['1'].optionOneText}</button>
      <hr/>
      <button>{props.eventData['1'].optionTwoText}</button>
      <hr/>
      <button>{props.eventData['1'].optionThreeText}</button>
    </div>
  );
}

EventUI.propTypes = {
  eventData: PropTypes.object
};

export default EventUI;
