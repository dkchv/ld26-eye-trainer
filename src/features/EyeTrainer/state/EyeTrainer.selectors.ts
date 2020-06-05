import { EyeTrainerConfig } from '../models/EyeTrainer.model';
import { EYE_TRAINER_STORE_KEY } from './EyeTrainer.store';

export const selectConfigStore = (state): EyeTrainerConfig => state[EYE_TRAINER_STORE_KEY];
