import React from 'react';
import { TrainerTypes } from '../../models/Trainer.model';
import { TrainerLetter } from '../../components/TrainerLetter/TrainerLetter';
import { TrainerRandomLetter } from '../../components/TrainerRandomLetter/TrainerRandomLetter';
import { useSelector } from 'react-redux';
import { selectConfigStore } from '../../state/config.selectors';

export function Trainer() {
  const config = useSelector(selectConfigStore);

  switch (config.type) {
    case TrainerTypes.LetterToMovement:
      return <TrainerLetter />
    case TrainerTypes.MovementToLetter:
      return <TrainerLetter />;
    case TrainerTypes.RandomLetter:
      return <TrainerRandomLetter />;
    default:
      return <TrainerLetter/>;
  }
}
