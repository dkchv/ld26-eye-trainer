import React from 'react';
import { Link } from 'react-router-dom';
import { useLayout } from 'features/Layout';

export function SoundCheck() {

  useLayout({
    isTopBar: false,
  })

  return (
    <div>
      <div className='row'>sound check</div>
      <div className='row d-flex'>
        <div className='col'>
          <Link to='./settings'>back</Link>
        </div>
        <div className='col'>
          <Link to='./start'>skip</Link>
        </div>
      </div>
    </div>
  )
}
