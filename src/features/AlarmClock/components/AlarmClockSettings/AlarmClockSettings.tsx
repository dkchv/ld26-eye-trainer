import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useLayout } from 'features/Layout';

export function AlarmClockSettings() {

  useLayout({
    title: 'Alarm settings',
    isTopBar: true,
  });

  return (
    <div className='fg-1 d-flex fd-column'>
      <div className='row fg-1 scroll-y inset-right'>
        form
      </div>

      <div className='row fg-0 fsh-0 d-flex fd-column ai-end'>
        <div className='row divider' />
        <Link className='row' to='./sound-check'>
          <Button variant="contained" color="primary">
            Start →
          </Button>
        </Link>
      </div>
    </div>

  );
}
