import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import emailsReducer from '../reducers/emails';
import senderReducer from '../reducers/sender';
import recipientReducer from '../reducers/recipient';

// REDUX DEV TOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// STORE CREATION
export default () => {
  const store = createStore(
    combineReducers({
      emails: emailsReducer,
      sender: senderReducer,
      recipient: recipientReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
