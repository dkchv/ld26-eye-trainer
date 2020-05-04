import { TrainerConfig } from '../models/Trainer.model';

export enum ConfigActionTypes {
  ConfigUpdate = 'ConfigUpdate',
}

export class ConfigUpdate {
  readonly type = ConfigActionTypes.ConfigUpdate;
  constructor(public payload: TrainerConfig) {}
}

export type ConfigAction = ConfigUpdate;
