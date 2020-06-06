import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LayoutUpdate } from '..';
import { LayoutState } from '../state/Layout.store';

export function useLayout(value: Partial<LayoutState>) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LayoutUpdate(value));
  }, [ value, dispatch ]);
}
