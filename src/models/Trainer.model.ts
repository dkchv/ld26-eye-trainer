export enum TrainerTypes {
  RandomLetter = 'RandomLetter',
  LetterToMovement = 'LetterToMovement',
  MovementToLetter = 'MovementToLetter',
}

export interface TrainerConfig {
  type: TrainerTypes,
  speed: number, // in ms
}

export const TrainerMetaMap = {
  [TrainerTypes.LetterToMovement]: {
    header: 'Текст → движения',
  },
  [TrainerTypes.MovementToLetter]: {
    header: 'Движения → буквы',
  },
  [TrainerTypes.RandomLetter]: {
    header: 'Случайные буквы',
  },
};
