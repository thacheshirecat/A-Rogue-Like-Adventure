const characterData = {
  1 : {
    name: 'Slips',
    description: 'A sneaky one',
    sneaky: 2,
    dashing: 1,
    cunning: 1
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
