export default (state = {}, action) => {
  switch (action.type) {
  case 'SELECT_CHARACTER':
    return action.character;
  default:
    return state;
  }
};
