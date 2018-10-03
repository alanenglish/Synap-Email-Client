import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmailDashboard from '../components/EmailDashboard';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route
          path="/"
          component={EmailDashboard}
          exact={true}
        />
        <Route
          component={NotFoundPage}
        />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
