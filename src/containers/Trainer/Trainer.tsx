import React from 'react';
import { TrainerTypes } from '../../models/Trainer.model';
import { TrainerWord } from '../../components/TrainerWord/TrainerWord';
import { TrainerRandomLetter } from '../../components/TrainerRandomLetter/TrainerRandomLetter';
import { useSelector } from 'react-redux';
import { selectConfigStore } from '../../state/config.selectors';
import { TrainerMovement } from '../../components/TrainerMovement/TrainerMovement';

export function Trainer() {
  const config = useSelector(selectConfigStore);

  switch (config.type) {
    case TrainerTypes.LetterToMovement:
      return <TrainerWord />
    case TrainerTypes.MovementToLetter:
      return <TrainerMovement />;
    case TrainerTypes.RandomLetter:
      return <TrainerRandomLetter />;
    default:
      return <TrainerWord/>;
  }
}
