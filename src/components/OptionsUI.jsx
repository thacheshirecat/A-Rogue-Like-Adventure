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
      //MISS
      if(props.selectedCharacter.sneaky < props.eventData[props.currentEvent].optionOne.skillTarget)
      {
        let newSneak = props.selectedCharacter.sneaky + 1;
        let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionOne.missDamage;

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.missText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_SNEAK',
          newSneaky: newSneak
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
      //TIE
      else if(props.selectedCharacter.sneaky === props.eventData[props.currentEvent].optionOne.skillTarget)
      {
        let newSneak = props.selectedCharacter.sneaky + 1;
        let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionOne.tieDamage;

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.tieText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_SNEAK',
          newSneaky: newSneak
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
      //SUCCESS
      else
      {
        let newSneak = props.selectedCharacter.sneaky + 1;
        let newHP = props.selectedCharacter.hp + props.eventData[props.currentEvent].optionOne.healing;
        if(newHP > 10)
        {
          newHP = 10;
        }

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.successText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_SNEAK',
          newSneaky: newSneak
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
    }

    //If Cunning
    ////////////
    else if(props.eventData[props.currentEvent].optionOne.eventType === 'cunning')
    {
      //MISS
      if(props.selectedCharacter.cunning < props.eventData[props.currentEvent].optionOne.skillTarget)
      {
        let newCunning = props.selectedCharacter.cunning + 1;
        let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionOne.missDamage;

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.missText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_CUNNING',
          newCunning: newCunning
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
      //TIE
      else if(props.selectedCharacter.cunning === props.eventData[props.currentEvent].optionOne.skillTarget)
      {
        let newCunning = props.selectedCharacter.cunning + 1;
        let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionOne.tieDamage;

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.tieText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_CUNNING',
          newCunning: newCunning
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
      //SUCCESS
      else
      {
        let newCunning = props.selectedCharacter.cunning + 1;
        let newHP = props.selectedCharacter.hp + props.eventData[props.currentEvent].optionOne.healing;
        if(newHP > 10)
        {
          newHP = 10;
        }

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.successText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_CUNNING',
          newCunning: newCunning
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
    }

    //If Dashing
    ////////////
    else if(props.eventData[props.currentEvent].optionOne.eventType === 'dashing')
    {
      if(props.selectedCharacter.dashing < props.eventData[props.currentEvent].optionOne.skillTarget)
      {
        let newDashing = props.selectedCharacter.dashing + 1;
        let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionOne.missDamage;

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.missText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_DASHING',
          newDashing: newDashing
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
      else if(props.selectedCharacter.dashing === props.eventData[props.currentEvent].optionOne.skillTarget)
      {
        let newDashing = props.selectedCharacter.dashing + 1;
        let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionOne.tieDamage;

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.tieText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_DASHING',
          newDashing: newDashing
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
      else
      {
        let newDashing = props.selectedCharacter.dashing + 1;
        let newHP = props.selectedCharacter.hp + props.eventData[props.currentEvent].optionOne.healing;
        if(newHP > 10)
        {
          newHP = 10;
        }

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionOne.successText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_DASHING',
          newDashing: newDashing
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
    }

    //If FIGHT
    //////////
    else if(props.eventData[props.currentEvent].optionOne.eventType === 'fight')
    {
      let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionOne.missDamage;

      const action = {
        type: 'CHANGE_DIALOGUE',
        dialogue: props.eventData[props.currentEvent].optionOne.missText
      };
      dispatch(action);

      const action2 = {
        type: 'UPDATE_HP',
        newHP: newHP
      };
      dispatch(action2);
    }

    //IF HEALING
    ////////////
    else if(props.eventData[props.currentEvent].optionOne.eventType === 'healing')
    {
      let newHP = props.selectedCharacter.hp + props.eventData[props.currentEvent].optionOne.healing;
      if(newHP > 10)
      {
        newHP = 10;
      }

      const action = {
        type: 'CHANGE_DIALOGUE',
        dialogue: props.eventData[props.currentEvent].optionOne.missText
      };
      dispatch(action);

      const action2 = {
        type: 'UPDATE_HP',
        newHP: newHP
      };
      dispatch(action2);
    }

    //New Event Chooser
    ///////////////////
    if(props.selectedCharacter.turnCounter < 10)
    {
      const finalAction = {
        type: 'CHANGE_EVENT',
        eventId: newEvent
      };
      dispatch(finalAction);
    }

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

    //If Sneak
    //////////
    if(props.eventData[props.currentEvent].optionTwo.eventType === 'sneak')
    {
      //MISS
      if(props.selectedCharacter.sneaky < props.eventData[props.currentEvent].optionTwo.skillTarget)
      {
        let newSneak = props.selectedCharacter.sneaky + 1;
        let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionTwo.missDamage;

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionTwo.missText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_SNEAK',
          newSneaky: newSneak
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
      //TIE
      else if(props.selectedCharacter.sneaky === props.eventData[props.currentEvent].optionTwo.skillTarget)
      {
        let newSneak = props.selectedCharacter.sneaky + 1;
        let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionTwo.tieDamage;

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionTwo.tieText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_SNEAK',
          newSneaky: newSneak
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
      //SUCCESS
      else
      {
        let newSneak = props.selectedCharacter.sneaky + 1;
        let newHP = props.selectedCharacter.hp + props.eventData[props.currentEvent].optionTwo.healing;
        if(newHP > 10)
        {
          newHP = 10;
        }

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionTwo.successText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_SNEAK',
          newSneaky: newSneak
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
    }

    //If Cunning
    ////////////
    else if(props.eventData[props.currentEvent].optionTwo.eventType === 'cunning')
    {
      //MISS
      if(props.selectedCharacter.cunning < props.eventData[props.currentEvent].optionTwo.skillTarget)
      {
        let newCunning = props.selectedCharacter.cunning + 1;
        let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionTwo.missDamage;

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionTwo.missText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_CUNNING',
          newCunning: newCunning
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
      //TIE
      else if(props.selectedCharacter.cunning === props.eventData[props.currentEvent].optionTwo.skillTarget)
      {
        let newCunning = props.selectedCharacter.cunning + 1;
        let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionTwo.tieDamage;

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionTwo.tieText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_CUNNING',
          newCunning: newCunning
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
      //SUCCESS
      else
      {
        let newCunning = props.selectedCharacter.cunning + 1;
        let newHP = props.selectedCharacter.hp + props.eventData[props.currentEvent].optionTwo.healing;
        if(newHP > 10)
        {
          newHP = 10;
        }

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionTwo.successText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_CUNNING',
          newCunning: newCunning
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
    }

    //If Dashing
    ////////////
    else if(props.eventData[props.currentEvent].optionTwo.eventType === 'dashing')
    {
      if(props.selectedCharacter.dashing < props.eventData[props.currentEvent].optionTwo.skillTarget)
      {
        let newDashing = props.selectedCharacter.dashing + 1;
        let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionTwo.missDamage;

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionTwo.missText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_DASHING',
          newDashing: newDashing
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
      else if(props.selectedCharacter.dashing === props.eventData[props.currentEvent].optionTwo.skillTarget)
      {
        let newDashing = props.selectedCharacter.dashing + 1;
        let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionTwo.tieDamage;

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionTwo.tieText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_DASHING',
          newDashing: newDashing
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
      else
      {
        let newDashing = props.selectedCharacter.dashing + 1;
        let newHP = props.selectedCharacter.hp + props.eventData[props.currentEvent].optionTwo.healing;
        if(newHP > 10)
        {
          newHP = 10;
        }

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionTwo.successText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_DASHING',
          newDashing: newDashing
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
    }

    //If FIGHT
    //////////
    else if(props.eventData[props.currentEvent].optionTwo.eventType === 'fight')
    {
      let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionTwo.missDamage;

      const action = {
        type: 'CHANGE_DIALOGUE',
        dialogue: props.eventData[props.currentEvent].optionTwo.missText
      };
      dispatch(action);

      const action2 = {
        type: 'UPDATE_HP',
        newHP: newHP
      };
      dispatch(action2);
    }

    //IF HEALING
    ////////////
    else if(props.eventData[props.currentEvent].optionTwo.eventType === 'healing')
    {
      let newHP = props.selectedCharacter.hp + props.eventData[props.currentEvent].optionTwo.healing;
      if(newHP > 10)
      {
        newHP = 10;
      }

      const action = {
        type: 'CHANGE_DIALOGUE',
        dialogue: props.eventData[props.currentEvent].optionTwo.missText
      };
      dispatch(action);

      const action2 = {
        type: 'UPDATE_HP',
        newHP: newHP
      };
      dispatch(action2);
    }

    //New Event Chooser
    ///////////////////
    if(props.selectedCharacter.turnCounter < 10)
    {
      const finalAction = {
        type: 'CHANGE_EVENT',
        eventId: newEvent
      };
      dispatch(finalAction);
    }
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

    //If Sneak
    //////////
    if(props.eventData[props.currentEvent].optionThree.eventType === 'sneak')
    {
      //MISS
      if(props.selectedCharacter.sneaky < props.eventData[props.currentEvent].optionThree.skillTarget)
      {
        let newSneak = props.selectedCharacter.sneaky + 1;
        let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionThree.missDamage;

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionThree.missText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_SNEAK',
          newSneaky: newSneak
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
      //TIE
      else if(props.selectedCharacter.sneaky === props.eventData[props.currentEvent].optionThree.skillTarget)
      {
        let newSneak = props.selectedCharacter.sneaky + 1;
        let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionThree.tieDamage;

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionThree.tieText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_SNEAK',
          newSneaky: newSneak
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
      //SUCCESS
      else
      {
        let newSneak = props.selectedCharacter.sneaky + 1;
        let newHP = props.selectedCharacter.hp + props.eventData[props.currentEvent].optionThree.healing;
        if(newHP > 10)
        {
          newHP = 10;
        }

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionThree.successText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_SNEAK',
          newSneaky: newSneak
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
    }

    //If Cunning
    ////////////
    else if(props.eventData[props.currentEvent].optionThree.eventType === 'cunning')
    {
      //MISS
      if(props.selectedCharacter.cunning < props.eventData[props.currentEvent].optionThree.skillTarget)
      {
        let newCunning = props.selectedCharacter.cunning + 1;
        let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionThree.missDamage;

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionThree.missText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_CUNNING',
          newCunning: newCunning
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
      //TIE
      else if(props.selectedCharacter.cunning === props.eventData[props.currentEvent].optionThree.skillTarget)
      {
        let newCunning = props.selectedCharacter.cunning + 1;
        let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionThree.tieDamage;

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionThree.tieText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_CUNNING',
          newCunning: newCunning
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
      //SUCCESS
      else
      {
        let newCunning = props.selectedCharacter.cunning + 1;
        let newHP = props.selectedCharacter.hp + props.eventData[props.currentEvent].optionThree.healing;
        if(newHP > 10)
        {
          newHP = 10;
        }

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionThree.successText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_CUNNING',
          newCunning: newCunning
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
    }

    //If Dashing
    ////////////
    else if(props.eventData[props.currentEvent].optionThree.eventType === 'dashing')
    {
      if(props.selectedCharacter.dashing < props.eventData[props.currentEvent].optionThree.skillTarget)
      {
        let newDashing = props.selectedCharacter.dashing + 1;
        let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionThree.missDamage;

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionThree.missText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_DASHING',
          newDashing: newDashing
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
      else if(props.selectedCharacter.dashing === props.eventData[props.currentEvent].optionThree.skillTarget)
      {
        let newDashing = props.selectedCharacter.dashing + 1;
        let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionThree.tieDamage;

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionThree.tieText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_DASHING',
          newDashing: newDashing
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
      else
      {
        let newDashing = props.selectedCharacter.dashing + 1;
        let newHP = props.selectedCharacter.hp + props.eventData[props.currentEvent].optionThree.healing;
        if(newHP > 10)
        {
          newHP = 10;
        }

        const action = {
          type: 'CHANGE_DIALOGUE',
          dialogue: props.eventData[props.currentEvent].optionThree.successText
        };
        dispatch(action);

        const action2 = {
          type: 'UPDATE_DASHING',
          newDashing: newDashing
        };
        dispatch(action2);

        const action3 = {
          type: 'UPDATE_HP',
          newHP: newHP
        };
        dispatch(action3);
      }
    }

    //If FIGHT
    //////////
    else if(props.eventData[props.currentEvent].optionThree.eventType === 'fight')
    {
      let newHP = props.selectedCharacter.hp - props.eventData[props.currentEvent].optionThree.missDamage;

      const action = {
        type: 'CHANGE_DIALOGUE',
        dialogue: props.eventData[props.currentEvent].optionThree.missText
      };
      dispatch(action);

      const action2 = {
        type: 'UPDATE_HP',
        newHP: newHP
      };
      dispatch(action2);
    }

    //IF HEALING
    ////////////
    else if(props.eventData[props.currentEvent].optionThree.eventType === 'healing')
    {
      let newHP = props.selectedCharacter.hp + props.eventData[props.currentEvent].optionThree.healing;
      if(newHP > 10)
      {
        newHP = 10;
      }

      const action = {
        type: 'CHANGE_DIALOGUE',
        dialogue: props.eventData[props.currentEvent].optionThree.missText
      };
      dispatch(action);

      const action2 = {
        type: 'UPDATE_HP',
        newHP: newHP
      };
      dispatch(action2);
    }

    //New Event Chooser
    ///////////////////
    if(props.selectedCharacter.turnCounter < 10)
    {
      const finalAction = {
        type: 'CHANGE_EVENT',
        eventId: newEvent
      };
      dispatch(finalAction);
    }
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
  currentDialogue: PropTypes.string,
  dispatch: PropTypes.func
};

export default connect()(OptionsUI);
