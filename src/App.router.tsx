import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { Settings } from './components/Settings/Settings';
import { Trainer } from './components/Trainer/Trainer';

export function AppRouter() {
  return (
    <Switch>
      <Route path='/settings' component={Settings} />
      <Route path='*' component={Trainer} />
    </Switch>
  );
}
