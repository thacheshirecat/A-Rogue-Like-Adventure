import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EventUI from './EventUI';

function GameState(props)
{

  let eventUI = <EventUI
    eventData={props.eventData}
    currentEvent={props.currentEvent}
    selectedCharacter={props.selectedCharacter}
    gamePhase={props.gamePhase}/>;

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
        <h4>Turn: {props.selectedCharacter.turnCounter}</h4>
      </div>
      <div>
        {eventUI}
      </div>
      <div className='footer'>
        <h4>{props.selectedCharacter.name}</h4>
        <h4>HP: {props.selectedCharacter.hp}</h4>
      </div>
    </div>
  );
}

GameState.propTypes = {
  eventData: PropTypes.object,
  selectedCharacter: PropTypes. object,
  currentEvent: PropTypes.string,
  gameState: PropTypes.string
};

export default connect()(GameState);
