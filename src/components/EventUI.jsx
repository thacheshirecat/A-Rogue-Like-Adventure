import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContinueUI from './ContinueUI';
import OptionsUI from './OptionsUI';

function EventUI(props)
{
  let textToDisplay = props.eventData[props.currentEvent].eventInitialText;

  let optionsDiv = null;
  if (props.gamePhase === 'options')
  {
    optionsDiv = <OptionsUI
      eventData={props.eventData}
      currentEvent={props.currentEvent}
      selectedCharacter={props.selectedCharacter}
      gamePhase={props.gamePhase}/>;
  }
  else
  {
    optionsDiv = null;
  }
  
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

      <div>
        {optionsDiv}
      </div>


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
