import { EyeTrainerConfig, EyeTrainerTypes } from '../models/EyeTrainer.model';
import { EyeTrainerActionTypes } from './EyeTrainer.store';

const initialState: EyeTrainerConfig = {
  type: EyeTrainerTypes.MovementToLetter,
  speed: 600,
};

export function eyeTrainerReducer(state: EyeTrainerConfig = initialState, action) {
  switch (action.type) {
    case EyeTrainerActionTypes.EyeTrainerConfigUpdate:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
