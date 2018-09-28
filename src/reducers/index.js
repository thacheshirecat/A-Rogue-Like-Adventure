import { combineReducers } from 'redux';

import eventDataReducer from './event-data-reducer';

const rootReducer = combineReducers({
  eventData: eventDataReducer
});

export default rootReducer;
