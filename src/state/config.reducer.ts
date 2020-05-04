import { useReducer } from 'react';
import { ConfigAction, ConfigActionTypes } from './config.action';
import { TrainerConfig, TrainerTypes } from '../models/Trainer.model';

const initialState: TrainerConfig = {
  type: TrainerTypes.LetterToMovement,
  speed: 2000,
};

function reducer(state: TrainerConfig, action: ConfigAction) {
  switch (action.type) {
    case ConfigActionTypes.ConfigUpdate:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export function useConfigReducer() {
  return useReducer(reducer, initialState);
}
