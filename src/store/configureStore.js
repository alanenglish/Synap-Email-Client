import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import emailsReducer from '../reducers/emails';
import senderReducer from '../reducers/sender';
import recipientReducer from '../reducers/recipient';
import activeReducer from '../reducers/active';
import filtersReducer from '../reducers/filters';
import errorsReducer from '../reducers/errors';

// REDUX DEV TOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// STORE CREATION
export default () => {
  const store = createStore(
    combineReducers({
      emails: emailsReducer,
      errors: errorsReducer,
      sender: senderReducer,
      recipient: recipientReducer,
      activeEmail: activeReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
