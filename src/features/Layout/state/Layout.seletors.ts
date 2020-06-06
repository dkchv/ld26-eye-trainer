import { createSelector } from 'reselect';
import { LAYOUT_STORE_KEY, LayoutState } from './Layout.store';

export const selectLayoutStore = (state): LayoutState => state[LAYOUT_STORE_KEY];

export const selectTopBar = createSelector(
  selectLayoutStore,
  (store) => store.isTopBar,
);
