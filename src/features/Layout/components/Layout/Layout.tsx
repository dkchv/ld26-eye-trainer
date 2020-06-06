import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { selectLayoutStore } from '../../state/Layout.seletors';
import { Menu } from '../Menu/Menu';
import CSS from './Layout.module.scss';

export interface LayoutProp {
  children: ReactNode,
}

export function Layout({ children }: LayoutProp) {
  const settings = useSelector(selectLayoutStore);

  return (
    <div className={CSS.root}>
      {settings.isTopBar && (
        <div className={CSS.menu}>
          <Menu title={settings.title} menu={settings.menu || []} />
        </div>
      )}
      <div className={CSS.content}>{children}</div>
    </div>
  );
}
