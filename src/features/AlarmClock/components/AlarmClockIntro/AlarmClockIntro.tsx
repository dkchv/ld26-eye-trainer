import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

export function AlarmClockIntro({ match }) {
  return (
    <div className='fg-1 d-flex fd-column'>
      <div className='row fg-1 scroll-y inset-right'>
        <p>TODO: Intro description here</p>
      </div>

      <div className='row fg-0 fsh-0 d-flex fd-column ai-end'>
        <div className='row divider' />
        <Link className='row' to={`${match.url}/settings`}>
          <Button variant="contained" color="primary">
            Skip →
          </Button>
        </Link>
      </div>
    </div>
  );
}
