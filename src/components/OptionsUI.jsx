import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function OptionsUI(props)
{
  //
  //Begining of Option One
  //
  function handleOptionOne()
  {
    let randomEvent = Math.floor(Math.random() * (11 - 1) + 1).toString();
    let newEvent = (props.selectedCharacter.turnCounter + 1).toString() + '00000' + randomEvent;

    const { dispatch } = props;
    const action = {
      type: 'CHANGE_PHASE',
      phase: 'continue'
    };
    dispatch(action);

    //If Sneak
    //////////
    if(props.eventData[props.currentEvent].optionOne.eventType === 'sneak')
    {
      if(props.selectedCharacter.sneaky < props.eventData[props.currentEvent].optionOne.skillTarget)
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.missText
        };
        dispatch(action);
      }
      else if(props.selectedCharacter.sneaky === props.eventData[props.currentEvent].optionOne.skillTarget)
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.tieText
        };
        dispatch(action);
      }
      else
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.successText
        };
        dispatch(action);
      }
    }
    //If Cunning
    ////////////
    else if(props.eventData[props.currentEvent].optionOne.eventType === 'cunning')
    {
      if(props.selectedCharacter.cunning < props.eventData[props.currentEvent].optionOne.skillTarget)
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.missText
        };
        dispatch(action);
      }
      else if(props.selectedCharacter.cunning === props.eventData[props.currentEvent].optionOne.skillTarget)
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.tieText
        };
        dispatch(action);
      }
      else
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.successText
        };
        dispatch(action);
      }
    }
    //If Dashing
    ////////////
    else if(props.eventData[props.currentEvent].optionOne.eventType === 'dashing')
    {
      if(props.selectedCharacter.dashing < props.eventData[props.currentEvent].optionOne.skillTarget)
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.missText
        };
        dispatch(action);
      }
      else if(props.selectedCharacter.dashing === props.eventData[props.currentEvent].optionOne.skillTarget)
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.tieText
        };
        dispatch(action);
      }
      else
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.successText
        };
        dispatch(action);
      }
    }
    //If FIGHT
    //////////
    else if(props.eventData[props.currentEvent].optionOne.eventType === 'fight')
    {
      const action = {
        type: 'CHANGE_DIALOGUE',
        dialogue: props.eventData[props.currentEvent].optionOne.missText
      };
      dispatch(action);
    }
    //New Event Chooser
    ///////////////////
    const finalAction = {
      type: 'CHANGE_EVENT',
      eventId: newEvent
    };
    dispatch(finalAction);
  }
  //
  //Begining of Option Two
  //
  function handleOptionTwo()
  {
    let randomEvent = Math.floor(Math.random() * (11 - 1) + 1).toString();
    let newEvent = (props.selectedCharacter.turnCounter + 1).toString() + '00000' + randomEvent;

    const { dispatch } = props;
    const action = {
      type: 'CHANGE_PHASE',
      phase: 'continue'
    };
    dispatch(action);

    if(props.eventData[props.currentEvent].optionTwo.eventType === 'sneak')
    {
      if(props.selectedCharacter.sneaky < props.eventData[props.currentEvent].optionTwo.skillTarget)
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionTwo.missText
        };
        dispatch(action);
      }
      else if(props.selectedCharacter.sneaky === props.eventData[props.currentEvent].optionTwo.skillTarget)
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionTwo.tieText
        };
        dispatch(action);
      }
      else
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionTwo.successText
        };
        dispatch(action);
      }
    }
    else if(props.eventData[props.currentEvent].optionTwo.eventType === 'cunning')
    {
      if(props.selectedCharacter.cunning < props.eventData[props.currentEvent].optionTwo.skillTarget)
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionTwo.missText
        };
        dispatch(action);
      }
      else if(props.selectedCharacter.cunning === props.eventData[props.currentEvent].optionTwo.skillTarget)
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionTwo.tieText
        };
        dispatch(action);
      }
      else
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionTwo.successText
        };
        dispatch(action);
      }
    }
    else if(props.eventData[props.currentEvent].optionTwo.eventType === 'dashing')
    {
      if(props.selectedCharacter.dashing < props.eventData[props.currentEvent].optionTwo.skillTarget)
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionTwo.missText
        };
        dispatch(action);
      }
      else if(props.selectedCharacter.dashing === props.eventData[props.currentEvent].optionTwo.skillTarget)
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionTwo.tieText
        };
        dispatch(action);
      }
      else
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionTwo.successText
        };
        dispatch(action);
      }
    }
    else if(props.eventData[props.currentEvent].optionTwo.eventType === 'fight')
    {
      const action = {
        type: 'CHANGE_DIALOGUE',
        dialogue: props.eventData[props.currentEvent].optionTwo.missText
      };
      dispatch(action);
    }

    const finalAction = {
      type: 'CHANGE_EVENT',
      eventId: newEvent
    };
    dispatch(finalAction);
  }
  //
  //Begining of Option Three
  //
  function handleOptionThree()
  {
    let randomEvent = Math.floor(Math.random() * (11 - 1) + 1).toString();
    let newEvent = (props.selectedCharacter.turnCounter + 1).toString() + '00000' + randomEvent;

    const { dispatch } = props;
    const action = {
      type: 'CHANGE_PHASE',
      phase: 'continue'
    };
    dispatch(action);

    if(props.eventData[props.currentEvent].optionThree.eventType === 'sneak')
    {
      if(props.selectedCharacter.sneaky < props.eventData[props.currentEvent].optionThree.skillTarget)
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionThree.missText
        };
        dispatch(action);
      }
      else if(props.selectedCharacter.sneaky === props.eventData[props.currentEvent].optionThree.skillTarget)
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionThree.tieText
        };
        dispatch(action);
      }
      else
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionThree.successText
        };
        dispatch(action);
      }
    }
    else if(props.eventData[props.currentEvent].optionThree.eventType === 'cunning')
    {
      if(props.selectedCharacter.cunning < props.eventData[props.currentEvent].optionThree.skillTarget)
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionThree.missText
        };
        dispatch(action);
      }
      else if(props.selectedCharacter.cunning === props.eventData[props.currentEvent].optionThree.skillTarget)
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionThree.tieText
        };
        dispatch(action);
      }
      else
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionThree.successText
        };
        dispatch(action);
      }
    }
    else if(props.eventData[props.currentEvent].optionThree.eventType === 'dashing')
    {
      if(props.selectedCharacter.dashing < props.eventData[props.currentEvent].optionThree.skillTarget)
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionThree.missText
        };
        dispatch(action);
      }
      else if(props.selectedCharacter.dashing === props.eventData[props.currentEvent].optionThree.skillTarget)
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionThree.tieText
        };
        dispatch(action);
      }
      else
      {
        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionThree.successText
        };
        dispatch(action);
      }
    }
    else if(props.eventData[props.currentEvent].optionThree.eventType === 'fight')
    {
      const action = {
        type: 'CHANGE_DIALOGUE',
        dialogue: props.eventData[props.currentEvent].optionThree.missText
      };
      dispatch(action);
    }

    const finalAction = {
      type: 'CHANGE_EVENT',
      eventId: newEvent
    };
    dispatch(finalAction);
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
  );
}

OptionsUI.propTypes = {
  eventData: PropTypes.object,
  selectedCharacter: PropTypes. object,
  currentEvent: PropTypes.string,
  gamePhase: PropTypes.string,
  currentDialogue: PropTypes.string
};

export default connect()(OptionsUI);
