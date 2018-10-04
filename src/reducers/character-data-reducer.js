const characterData = {
  1 : {
    name: 'Slips',
    description: 'A sneaky one',
    sneaky: 3,
    dashing: 1,
    cunning: 2,
    hp: 10,
    turnCounter: 0
  },
  2 : {
    name: 'Ford',
    description: 'A dashing rogue',
    sneaky: 1,
    dashing: 3,
    cunning: 2,
    hp: 10,
    turnCounter: 0
  },
  3 : {
    name: 'Crafty',
    description: 'A cunning one indeed',
    sneaky: 2,
    dashing: 1,
    cunning: 3,
    hp: 10,
    turnCounter: 0
  }
};

export default (state = characterData, action) => {
  switch (action.type) {
  default:
    return state;
  }
};
