import axios from 'axios';
// RECIPIENT ACTIONS

export const setFocusedRecipient = (recipient) => ({
  type: 'SET_FOCUSED_RECIPIENT',
  recipient
});

export const startSetFocusedRecipient = (emailAddress) => {
  return (dispatch) => {
    return axios.get(`https://morning-falls-3769.herokuapp.com/api/people/${emailAddress}`).then((response) => {
      dispatch(setFocusedRecipient(response.data));
    });
  };
};
