import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from '../ui/NotFound';
import Main from '../ui/Main';
import About from '../ui/About';
import AddRes from '../ui/AddRes';

export const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/add-resource' component={AddRes} />
      <Route path='/about' component={About} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
