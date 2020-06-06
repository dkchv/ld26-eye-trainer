import { MenuItem } from '../models/Menu.model';

export const LAYOUT_STORE_KEY = 'layout';

export interface LayoutState {
  title: string;
  isTopBar: boolean;
  menu: MenuItem[]
}

export enum LayoutActionTypes {
  LayoutUpdate = '[Layout] Update',
}
