import React from 'react';
import { Link } from 'react-router-dom';
import { useLayout } from 'features/Layout';

export function AlarmClockSettings() {

  useLayout({
    title: 'Alarm settings',
    isTopBar: true,
  });

  return (
    <div>
      <div className='row'>

      </div>

      <div className='row'>
        <Link to='./sound-check'>Start</Link>
      </div>
    </div>

  );
}
