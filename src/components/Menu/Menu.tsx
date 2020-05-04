import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSettings, FiChevronLeft } from 'react-icons/fi';
import CSS from './Menu.module.scss';

export type MenuProps = {
  title: string,
}

export function Menu({ title }: MenuProps) {
  const location = useLocation();
  const [isBack, setIsBack] = useState(false);

  useEffect(() => {
    setIsBack(location.pathname !== '/');
  }, [location]);

  console.log('--', location)
  return (
    <div className={`${CSS.root} d-flex ai-center fg-1`}>
      <div className={`${CSS.back} fg-0`}>
        {isBack && (
          <Link to='/' className='button-icon'><FiChevronLeft/></Link>
        )}
      </div>

      <div className='d-flex fg-1 jc-center'>{title}</div>
      <div className='fg-0'>
        <Link to='/settings' className='button-icon'>
          <FiSettings />
        </Link>
      </div>
    </div>
  );
}
