import React from 'react';
import { FiActivity, FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useLayout } from 'features/Layout';

export function AppIntro() {
  useLayout({ title: 'Welcome to LD26 project' });

  return (
    <div>
      <div className='row d-flex'>
        <div className='col fg-0'>
          <FiEye />
        </div>
        <div className='col fg-1'>
          <div className='row-05'>
            <Link to='/eye-trainer'>Eye trainer</Link>
          </div>
          <div className='row-05'>Simple eye trainer</div>
        </div>
      </div>
      <div className='row d-flex'>
        <div className='col fg-0'>
          <FiActivity />
        </div>
        <div className='col fg-1'>
          <div className='row-05'>
            <Link to='/alarm-clock'>Alarm Clock</Link>
          </div>
          <div className='row-05'>Simple alarm clock</div>
        </div>
      </div>
    </div>
  );
}
