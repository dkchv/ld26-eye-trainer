import { LayoutActionTypes, LayoutState } from './Layout.store';

const initialState: LayoutState = {
  menu: [],
  title: '',
  isTopBar: true,
};

export function layoutReducer(state: LayoutState = initialState, action): LayoutState {
  switch (action.type) {
    case LayoutActionTypes.LayoutUpdate:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
