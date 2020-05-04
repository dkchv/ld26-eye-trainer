import React from 'react';
import CSS from './Layout.module.scss';
import { Menu } from '../Menu/Menu';

export function Layout({ children }) {
  return (
    <div className={CSS.root}>
      <div className={CSS.menu}>
        <Menu title='title' />
      </div>
      <div className={CSS.content}>{children}</div>
    </div>
  );
}
