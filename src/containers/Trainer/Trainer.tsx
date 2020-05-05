import React from 'react';
import { TrainerTypes } from '../../models/Trainer.model';
import { TrainerWord } from '../../components/TrainerWord/TrainerWord';
import { TrainerRandomLetter } from '../../components/TrainerRandomLetter/TrainerRandomLetter';
import { useSelector } from 'react-redux';
import { selectConfigStore } from '../../state/config.selectors';

export function Trainer() {
  const config = useSelector(selectConfigStore);

  switch (config.type) {
    case TrainerTypes.LetterToMovement:
      return <TrainerWord />
    case TrainerTypes.MovementToLetter:
      return <TrainerWord />;
    case TrainerTypes.RandomLetter:
      return <TrainerRandomLetter />;
    default:
      return <TrainerWord/>;
  }
}
