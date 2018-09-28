export default (state = '', action) => {
  switch (action.type) {
  case 'CHANGE_EVENT':
    return action.eventId;
  default:
    return state;
  }
};
