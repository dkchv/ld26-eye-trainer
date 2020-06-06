import { mapAction } from 'features/Store';
import { LayoutActionTypes, LayoutState } from './Layout.store';

export const LayoutUpdate = mapAction<Partial<LayoutState>>(LayoutActionTypes.LayoutUpdate);
