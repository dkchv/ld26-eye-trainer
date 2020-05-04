
export enum TrainerTypes {
  WordToMovement = 'WordToMovement',
  MovementToWord = 'MovementToWord',
}

export interface TrainerConfig {
  type: TrainerTypes,
}
