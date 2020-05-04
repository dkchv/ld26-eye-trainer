
export enum TrainerTypes {
  LetterToMovement = 'LetterToMovement',
  MovementToLetter = 'MovementToLetter',
}

export interface TrainerConfig {
  type: TrainerTypes,
  speed: number, // in ms
}
