import React, { ReactNode } from 'react';
import { MenuItem } from '../../../../models/Menu.model';
import { Menu } from '../Menu/Menu';
import CSS from './Layout.module.scss';

export interface LayoutProp {
  children: ReactNode,
  title: string,
  menu?: MenuItem[]
}

export function Layout({ children, title, menu }: LayoutProp) {
  return (
    <div className={CSS.root}>
      <div className={CSS.menu}>
        <Menu title={title} menu={menu || []} />
      </div>
      <div className={CSS.content}>{children}</div>
    </div>
  );
}
