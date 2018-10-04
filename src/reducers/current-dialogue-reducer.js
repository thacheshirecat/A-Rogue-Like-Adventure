export default (state = {}, action) => {
  let newState;

  switch (action.type)
  {
  case 'CHANGE_DIALOGUE':
    newState = Object.assign({}, state, {
      currentDialogue: action.dialogue
    });
    return newState;

  case 'CHANGE_TITLE':
    newState = Object.assign({}, state, {
      currentTitle: action.currentTitle
    });
    return newState;

  default:
    return state;
  }
};
