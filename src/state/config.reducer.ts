import { ConfigActionTypes } from './config.action';
import { TrainerConfig, TrainerTypes } from '../models/Trainer.model';

const initialState: TrainerConfig = {
  type: TrainerTypes.LetterToMovement,
  speed: 600,
};

export function configReducer(state: TrainerConfig = initialState, action) {
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
