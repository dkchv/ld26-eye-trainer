import React from 'react';
import { useConfigReducer } from '../../state/config.reducer';
import { TrainerTypes } from '../../models/Trainer.model';
import { TrainerLetter } from '../../components/TrainerLetter/TrainerLetter';

export function Trainer() {
  const [config] = useConfigReducer();

  switch (config.type) {
    case TrainerTypes.LetterToMovement:
      return <TrainerLetter />
    case TrainerTypes.MovementToLetter:
      return <TrainerLetter/>;
  }
}
