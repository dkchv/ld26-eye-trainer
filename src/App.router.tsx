import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { Settings } from './containers/Settings/Settings';
import { Trainer } from './containers/Trainer/Trainer';
import { Alphabet } from './components/Alphabet/Alphabet';

export function AppRouter() {
  return (
    <Switch>
      <Route path='/settings' component={Settings} />
      <Route path='/alphabet' component={Alphabet} />
      <Route path='*' component={Trainer} />
    </Switch>
  );
}
