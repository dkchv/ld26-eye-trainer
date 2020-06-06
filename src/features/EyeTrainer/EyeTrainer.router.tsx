import { EyeTrainerContent } from 'features/EyeTrainer/index';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useLayout } from '../Layout';
import { Alphabet } from './components/Alphabet/Alphabet';
import { EyeTrainerSettings } from './components/EyeTrainerSettings/EyeTrainerSettings';
import { getEyeTrainerMenu } from './EyeTrainer.menu';

export function EyeTrainerRouter({ match }) {
  const [ menu ] = useState(getEyeTrainerMenu(match.url));

  useLayout({
    title: 'Eye trainer',
    menu,
  })

  return (
    <Switch>
      <Route path={`${match.url}/settings`} component={EyeTrainerSettings} />
      <Route path={`${match.url}/alphabet`} component={Alphabet} />
      <Route path={match.url} component={EyeTrainerContent} />
    </Switch>
  );
}
