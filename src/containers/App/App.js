import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import { routes } from './routes';

const App = () => {
  const pages = routes.map((route, index) => {
    return (
      <Route 
        component={route.component}
        exact={route.exact}
        path={route.path}
        key={index}
      />
    );
  });

  return (
    <BrowserRouter>
      <Switch>
        {pages}
        <Redirect to='/'/>
      </Switch>
    </BrowserRouter>
  )
};

export default App;
