import React from 'react';
import PropTypes from 'prop-types';

import EventUI from './EventUI';

function GameState(props)
{

  let eventUI = <EventUI eventData={props.eventData}/>;

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
          h3 {
            text-align: center;
          }
      `}</style>
      <div className='header'>
        <h4>Turn: 1</h4>
      </div>
      <h3>Event Name</h3>
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
  eventData: PropTypes.object
};

export default GameState;
