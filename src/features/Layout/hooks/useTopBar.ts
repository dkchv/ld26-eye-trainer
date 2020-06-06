import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LayoutUpdate } from '..';
import { selectTopBar } from '../state/Layout.seletors';

export function useTopBar(value: boolean) {
  const dispatch = useDispatch();
  const [prev, setPrev] = useState<boolean | null>(null);
  const isTopBar = useSelector(selectTopBar);

  useEffect(() => {
    if (prev === null && value !== isTopBar) {
      // save
      setPrev(isTopBar);
      dispatch(LayoutUpdate({ isTopBar: value }));
    }

    return () => {
      if (prev !== null) {
        // revert
        dispatch(LayoutUpdate({ isTopBar: prev }))
      }
    }
  }, [ value, dispatch, isTopBar, prev ]);
}
