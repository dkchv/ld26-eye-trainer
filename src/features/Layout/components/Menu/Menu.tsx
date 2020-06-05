import React, { useCallback, useEffect, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link, useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import { MenuItem } from '../../../../models/Menu.model';
import CSS from './Menu.module.scss';

export interface MenuProps {
  menu: MenuItem[];
  title: string;
}

export function Menu({ title, menu }: MenuProps) {
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const [ isBack, setIsBack ] = useState(false);

  useEffect(() => {
    setIsBack(location.pathname !== '/');
  }, [ location ]);

  console.log('--l', location.pathname, match.url, match.path);

  const handleBack = useCallback(() => {
    history.push(location.pathname === match.path
      ? '/'
      : match.url);
  }, [ history, match, location ]);

  return (
    <div className={`${CSS.root} d-flex ai-center fg-1`}>
      <div className={`${CSS.back} col fg-0`}>
        {isBack && (
          <div onClick={handleBack} className='button-icon pointer'><FiChevronLeft /></div>
        )}
      </div>

      <div className='col d-flex fg-1 jc-center'>{title}</div>
      {menu.map((item, index) => (
        <div key={index} className='col fg-0'>
          <Link to={item.to} className='button-icon'>
            {item.icon}
          </Link>
        </div>
      ))}
    </div>
  );
}
