import { Button } from 'features/UI';
import React from 'react';

export function AlarmClockIntro({ match }) {
  return (
    <div className='fg-1 d-flex fd-column'>
      <div className='row fg-1 scroll-y inset-right'>
        <p>TODO: Intro description here</p>
      </div>

      <div className='row fg-0 fsh-0 d-flex fd-column ai-end'>
        <div className='row divider' />
        <div className='row'>
          <Button color='secondary' to={`${match.url}/settings`}>
            Skip →
          </Button>
        </div>
      </div>
    </div>
  );
}
