export default (state = {}, action) => {
  let newState;
  // const { name, description, sneaky, dashing, cunning, hp, turnCounter } = action;

  switch (action.type)
  {
  case 'SELECT_CHARACTER':
    return action.character;

  case 'ADVANCE_TURN':
    newState = Object.assign({}, state, {
      turnCounter: action.newTurn
    });
    return newState;

  case 'UPDATE_SNEAK':
    newState = Object.assign({}, state, {
      sneaky: action.newSneaky
    });
    return newState;

  case 'UPDATE_CUNNING':
    newState = Object.assign({}, state, {
      cunning: action.newCunning
    });
    return newState;

  case 'UPDATE_DASHING':
    newState = Object.assign({}, state, {
      dashing: action.newDashing
    });
    return newState;

  case 'UPDATE_HP':
    newState = Object.assign({}, state, {
      hp: action.newHP
    });
    return newState;

  default:
    return state;
  }
};
