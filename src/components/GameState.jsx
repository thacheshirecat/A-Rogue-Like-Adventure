import React from 'react';
import PropTypes from 'prop-types';

import EventUI from './EventUI';

function GameState(props)
{

  let eventUI = <EventUI eventData={props.eventData} currentEvent={props.currentEvent}/>;

  return(
    <div>
      <style jsx>{`
          .footer {
            background-color: crimson;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
          }
          .header{
            background-color: crimson;
          }
      `}</style>
      <div className='header'>
        <h4>Turn: 1</h4>
      </div>
      <div>
        {eventUI}
      </div>
      <div className='footer'>
        <h4>Character Name</h4>
        <h4>HP: 10</h4>
      </div>
    </div>
  );
}

GameState.propTypes = {
  eventData: PropTypes.object,
  currentEvent: PropTypes.string
};

export default GameState;
