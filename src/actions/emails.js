import axios from 'axios';
// EMAILS ACTIONS

// SET_EMAILS
export const setEmails = (emails) => ({
  type: 'SET_EMAILS',
  emails
});

export const startSetEmails = () => {
  return (dispatch) => {
    return axios.get('https://morning-falls-3769.herokuapp.com/api/messages').then((response) => {
      dispatch(setEmails(response.data));
    });
  };
};
