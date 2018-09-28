// import eventData from './../constants/DefaultState';

const eventData = {
  1 : {
    eventName: 'Begin Again',
    eventType: 'dialogue',
    optionOneText: 'Head West',
    optionTwoText: 'Head East',
    optionThreeText: 'Head North'
  },
  2 : {
    eventName: 'A Grassy Knoll',
    eventType: 'fight',
    optionOneText: 'Sneak Past The Knoll',
    optionTwoText: 'Punch The Knoll',
    optionThreeText: 'Try and Distract The Knoll'
  }
};

export default (state = eventData, action) => {
  switch (action.type) {
  case 'CHANGE_EVENT':
    return state;
  default:
    return state;
  }
};
