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

  default:
    return state;
  }
};
