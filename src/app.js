import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetEmails } from './actions/emails';
import { startSetFocusedSender } from './actions/sender';
import { startSetFocusedRecipient } from './actions/recipient';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'; // css for react dates calendar

const store = configureStore();

store.dispatch(startSetEmails());
store.dispatch(startSetFocusedSender('white_jackson@ziemann.com'));
store.dispatch(startSetFocusedRecipient('aileen.klocko@binspfannerstill.net'));

const App = (
  <Provider store={store} >
    <AppRouter />
  </Provider>
);

ReactDOM.render(App, document.getElementById('app'));
