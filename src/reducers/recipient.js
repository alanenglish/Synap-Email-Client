// RECIPIENT REDUCER
export default (state = '', action) => {
  switch (action.type) {
    case 'SET_FOCUSED_RECIPIENT':
      return action.recipient;
    default:
      return state;
  }
};
