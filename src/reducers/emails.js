// EMAILS REDUCER
const emailsReducerDefaultState = [];

export default (state = emailsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_EMAILS':
      return action.emails;
    default:
      return state;
  }
};
