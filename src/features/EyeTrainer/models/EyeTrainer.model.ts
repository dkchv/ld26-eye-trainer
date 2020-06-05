export enum EyeTrainerTypes {
  RandomLetter = 'RandomLetter',
  LetterToMovement = 'LetterToMovement',
  MovementToLetter = 'MovementToLetter',
}

export interface EyeTrainerConfig {
  type: EyeTrainerTypes,
  speed: number, // in ms
}

export const EyeTrainerMetaMap = {
  [EyeTrainerTypes.LetterToMovement]: {
    header: 'Текст → движения',
  },
  [EyeTrainerTypes.MovementToLetter]: {
    header: 'Движения → буквы',
  },
  [EyeTrainerTypes.RandomLetter]: {
    header: 'Случайные буквы',
  },
};
