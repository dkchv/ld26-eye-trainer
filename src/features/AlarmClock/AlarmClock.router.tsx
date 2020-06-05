import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { AlarmClockIntro } from './components/AlarmClockIntro/AlarmClockIntro';

export function AlarmClockRouter() {
  const match = useRouteMatch();

  return (
    <Switch>
      {/*<Route path={`${match.url}/settings`} component={Settings} />*/}
      <Route path={match.url} component={AlarmClockIntro} />
    </Switch>
  )
}
