const characterData = {
  1 : {
    name: 'Slips',
    description: 'A sneaky one',
    sneaky: 2,
    dashing: 1,
    cunning: 1
  },
  2 : {
    name: 'Ford',
    description: 'A dashing rogue',
    sneaky: 1,
    dashing: 2,
    cunning: 1
  },
  3 : {
    name: 'Crafty',
    description: 'A cunning one indeed',
    sneaky: 1,
    dashing: 1,
    cunning: 2
  }
};

export default (state = characterData, action) => {
  switch (action.type) {
  case 'VIEW_CHARACTERS':
    return state;
  default:
    return state;
  }
};
