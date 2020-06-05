import CSS from '../TrainerWord/TrainerWord.module.scss';
import React, { useCallback, useEffect, useState } from 'react';
import { getRandomWordQueue } from '../../../../models/Letter.model';
import { CssPositionMap } from '../TrainerWord/TrainerWord';
import { useSelector } from 'react-redux';
import { selectConfigStore } from '../../state/EyeTrainer.selectors';

export function TrainerRandomLetter() {
  const config = useSelector(selectConfigStore);
  const [ queue, setQueue ] = useState(() => getRandomWordQueue());
  const [queueIndex, setQueueIndex] = useState(0);

  const current = queue[queueIndex];

  const handleNextMovement = useCallback(() => {
    const next = queueIndex + 1;
    if (next >= queue.length) {
      setQueue(getRandomWordQueue());
      setQueueIndex(0);
      return;
    }
    setQueueIndex(next);
  }, [queueIndex, queue.length]);

  useEffect(() => {
    const timer = setInterval(handleNextMovement, config.speed);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [ handleNextMovement, config ]);

  return (
    <div className={CSS.root}>
      <div className={`${CSS.area} row fg-1`}>
        <div className={CSS.letterBG}>{current.letter}</div>
        <div className={`${CSS.pointer} ${CssPositionMap[current.position]}`} style={{
          transition: `all ${config.speed}ms`,
        }} />
      </div>
    </div>
  );
}
