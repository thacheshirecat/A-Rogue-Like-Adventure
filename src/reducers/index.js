import { combineReducers } from 'redux';

import EventData from './../constants/DefaultState';

const rootReducer = combineReducers({
  EventData: EventData
});

export default rootReducer;
