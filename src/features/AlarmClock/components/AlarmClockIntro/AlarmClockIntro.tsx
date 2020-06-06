import React from 'react';
import { Link } from 'react-router-dom';

export function AlarmClockIntro({ match }) {
  return (
    <div>
      <div className='row'>Intro description here</div>
      <div className='row'>
        <Link to={`${match.url}/settings`}>skip</Link>
      </div>
    </div>
  );
}
