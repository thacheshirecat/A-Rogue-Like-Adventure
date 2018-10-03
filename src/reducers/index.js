import { combineReducers } from 'redux';

import eventDataReducer from './event-data-reducer';
import selectedCharacterReducer from './selected-character-reducer';
import characterDataReducer from './character-data-reducer';
import currentEventReducer from './current-event-reducer';
import gamePhaseReducer from './game-phase-reducer';
import currentDialogueReducer from './current-dialogue-reducer';

const rootReducer = combineReducers({
  eventData: eventDataReducer,
  characterData: characterDataReducer,
  selectedCharacter: selectedCharacterReducer,
  currentEvent: currentEventReducer,
  gamePhase: gamePhaseReducer,
  currentDialogue: currentDialogueReducer
});

export default rootReducer;
