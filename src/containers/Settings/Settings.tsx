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
      <div>type: {config.type}</div>
      <button onClick={handleClick}>letter -> eyes</button>
      <button onClick={handleClick}>eyes -> letter</button>
    </div>
  );
}
