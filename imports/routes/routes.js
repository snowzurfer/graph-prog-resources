import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from '../ui/NotFound';
import Main from '../ui/Main';
import About from '../ui/About';

export const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/about' component={About} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
