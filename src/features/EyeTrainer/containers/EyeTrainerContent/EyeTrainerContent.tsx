import React from 'react';
import { useSelector } from 'react-redux';
import { TrainerMovement } from '../../components/TrainerMovement/TrainerMovement';
import { TrainerRandomLetter } from '../../components/TrainerRandomLetter/TrainerRandomLetter';
import { TrainerWord } from '../../components/TrainerWord/TrainerWord';
import { EyeTrainerTypes } from '../../models/EyeTrainer.model';
import { selectConfigStore } from '../../state/EyeTrainer.selectors';

export const EyeTrainerContentMap = {
  [EyeTrainerTypes.LetterToMovement]: <TrainerWord />,
  [EyeTrainerTypes.MovementToLetter]: <TrainerMovement />,
  [EyeTrainerTypes.RandomLetter]: <TrainerRandomLetter />,
}

export function EyeTrainerContent() {
  const config = useSelector(selectConfigStore);
  return EyeTrainerContentMap[config.type];
}
