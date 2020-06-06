import { AlarmClockRouter } from 'features/AlarmClock';
import { EyeTrainerRouter } from 'features/EyeTrainer';
import React from 'react';
import { Route, Switch } from 'react-router';
import { useLayout } from '../Layout';
import { AppIntro } from './components/AppIntro/AppIntro';

export function AppRouter() {

  useLayout({
    isTopBar: true,
  })

  return (
    <Switch>
      <Route path='/eye-trainer' component={EyeTrainerRouter} />
      <Route path='/alarm-clock' component={AlarmClockRouter} />
      <Route path='*' component={AppIntro} />
    </Switch>
  );
}
