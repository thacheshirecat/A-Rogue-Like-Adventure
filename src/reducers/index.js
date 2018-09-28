import { combineReducers } from 'redux';

import eventDataReducer from './event-data-reducer';
import selectedCharacterReducer from './selected-character-reducer';
import characterDataReducer from './character-data-reducer';

const rootReducer = combineReducers({
  eventData: eventDataReducer,
  characterData: characterDataReducer,
  selectedCharacter: selectedCharacterReducer
});

export default rootReducer;
