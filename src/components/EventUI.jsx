import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContinueUI from './ContinueUI';
import OptionsUI from './OptionsUI';

function EventUI(props)
{
  let optionsDiv = null;
  if (props.gamePhase === 'options')
  {
    optionsDiv = <OptionsUI
      eventData={props.eventData}
      currentEvent={props.currentEvent}
      selectedCharacter={props.selectedCharacter}
      gamePhase={props.gamePhase}
      currentDialogue={props.currentDialogue}/>;
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
      gamePhase={props.gamePhase}
      currentDialogue={props.currentDialogue}/>;
  }

  return(
    <div>
      <style jsx>{`
        h3 {
          text-align: center;
        }
      `}</style>
    <h3>{props.currentDialogue.currentTitle}</h3>
      <div className='card'>
        <p>{props.currentDialogue.currentDialogue}</p>
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
  gamePhase: PropTypes.string,
  currentDialogue: PropTypes.object
};

export default connect()(EventUI);
