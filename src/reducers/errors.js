// ERRORS REDUCER

export default (state = null, action) => {
  switch (action.type) {
    case 'SET_ERRORS':
      return action.error;
    default:
      return state;
  }
};
