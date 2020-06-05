import React from 'react';
import { Layout } from '../../../Layout';
import { AlarmClockRouter } from '../../AlarmClock.router';

export function AlarmClock() {
  return (
    <Layout title='Alarm Clock'>
      <AlarmClockRouter />
    </Layout>
  )
}
