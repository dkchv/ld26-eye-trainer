import React, { useCallback } from 'react';
import { useConfigReducer } from '../../state/config.reducer';
import { ConfigUpdate } from '../../state/config.action';
import { TrainerTypes } from '../../models/Trainer.model';

export function Settings() {
  const [config, dispatch] = useConfigReducer();

  const handleClick = useCallback(() => {
    dispatch(new ConfigUpdate({
      type: TrainerTypes.MovementToLetter,
    }))
  }, [dispatch]);

  return (
    <div>
      <div className='row'>type: {config.type}</div>
      <div className='row'>speed: {config.speed} ms</div>
    </div>
  );
}
