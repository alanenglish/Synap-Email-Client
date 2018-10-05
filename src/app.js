import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetEmails } from './actions/emails';
import Loading from './components/Loading';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'; // css for react dates calendar
import 'react-toastify/dist/ReactToastify.css'; // react toastify

const store = configureStore();

const App = (
  <Provider store={store}>
    <div>
      <AppRouter />
      <ToastContainer />
    </div>
  </Provider>
);

ReactDOM.render(<Loading />, document.getElementById('app'));

store.dispatch(startSetEmails()).then(() => {
  ReactDOM.render(App, document.getElementById('app'));
});
