import React from 'react';
import { Route, Switch } from 'react-router';
import { AlarmClock } from '../AlarmClock';
import { EyeTrainer } from '../EyeTrainer/containers/EyeTrainer/EyeTrainer';
import { Intro } from './components/Intro';

export function AppRouter() {
  return (
    <Switch>
      <Route path='/eye-trainer' component={EyeTrainer} />
      <Route path='/alarm-clock' component={AlarmClock} />
      <Route path='*' component={Intro} />
    </Switch>
  );
}
