import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useLayout } from '../Layout';
import { AlarmClockIntro } from './components/AlarmClockIntro/AlarmClockIntro';
import { AlarmClockSettings } from './components/AlarmClockSettings/AlarmClockSettings';
import { AlarmTimer } from './components/AlarmTimer/AlarmTimer';
import { SoundCheck } from './components/SoundCheck/SoundCheck';

export function AlarmClockRouter({ match }) {

  useLayout({
    menu: [],
  })

  return (
    <Switch>
      <Route path={`${match.url}/settings`} component={AlarmClockSettings} />
      <Route path={`${match.url}/sound-check`} component={SoundCheck} />
      <Route path={`${match.url}/start`} component={AlarmTimer} />
      <Route path={match.url} component={AlarmClockIntro} />
    </Switch>
  )
}
