// SENDER REDUCER
export default (state = '', action) => {
  switch (action.type) {
    case 'SET_FOCUSED_SENDER':
      return action.sender;
    default:
      return state;
  }
};
