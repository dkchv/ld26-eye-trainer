import { EyeTrainerContent } from 'features/EyeTrainer/index';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Alphabet } from './components/Alphabet/Alphabet';
import { Settings } from './components/Settings/Settings';

export function EyeTrainerRouter({ match }) {

  return (
    <Switch>
      <Route path={`${match.url}/settings`} component={Settings} />
      <Route path={`${match.url}/alphabet`} component={Alphabet} />
      <Route path={match.url} component={EyeTrainerContent} />
    </Switch>
  );
}
