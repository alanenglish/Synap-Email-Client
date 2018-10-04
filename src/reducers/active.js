// ACTIVE EMAIL REDUCER
export default (state = '', action) => {
  switch (action.type) {
    case 'SET_ACTIVE_EMAIL':
      return action.activeEmail;
    default:
      return state;
  }
};
