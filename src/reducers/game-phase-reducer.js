export default (state = 'fresh', action) => {
  switch (action.type) {
  case 'CHANGE_PHASE':
    return action.phase;
  default:
    return state;
  }
};
