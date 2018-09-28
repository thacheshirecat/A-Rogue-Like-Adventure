const eventData = {
  intro : {
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
  default:
    return state;
  }
};
