import axios from 'axios';
// SENDER ACTIONS

export const setFocusedSender = (sender) => ({
  type: 'SET_FOCUSED_SENDER',
  sender
});

export const startSetFocusedSender = (emailAddress) => {
  return (dispatch) => {
    return axios.get(`https://morning-falls-3769.herokuapp.com/api/people/${emailAddress}`).then((response) => {
      dispatch(setFocusedSender(response.data));
    });
  };
};
