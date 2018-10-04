import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetEmails } from './actions/emails';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'; // css for react dates calendar

const store = configureStore();

store.dispatch(startSetEmails());

const App = (
  <Provider store={store} >
    <AppRouter />
  </Provider>
);

ReactDOM.render(App, document.getElementById('app'));
