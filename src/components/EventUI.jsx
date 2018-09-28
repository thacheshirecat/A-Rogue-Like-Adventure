import React from 'react';
import PropTypes from 'prop-types';

function EventUI(props)
{
  return(
    <div>
      <div className='card'>
        <p>{props.eventData['1'].eventName}</p>
      </div>
      <br/>
      <button>Option 1</button>
      <hr/>
      <button>Option 2</button>
      <hr/>
      <button>Option 3</button>
    </div>
  );
}

EventUI.propTypes = {
  eventData: PropTypes.object
};

export default EventUI;
