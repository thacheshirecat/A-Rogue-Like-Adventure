export default (state = '', action) => {
  switch (action.type) {
  case 'CHANGE_DIALOGUE':
    return action.dialogue;
  default:
    return state;
  }
};
