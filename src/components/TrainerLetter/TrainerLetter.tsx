import React, { useCallback, useEffect, useState } from 'react';
import CSS from './TrainerLetter.module.scss';
import { getWordQueue, PositionTypes } from '../../models/Letter.model';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { selectConfigStore } from '../../state/config.selectors';

const CssPositionMap = {
  [PositionTypes.Left]: CSS.Left,
  [PositionTypes.Right]: CSS.Right,
  [PositionTypes.Top]: CSS.Top,
  [PositionTypes.Bottom]: CSS.Bottom,
  [PositionTypes.Center]: CSS.Center,
};

export function TrainerLetter() {
  const config = useSelector(selectConfigStore);
  const [ word ] = useState('Привет');

  const [queue] = useState(() => getWordQueue(word));
  const [queueIndex, setQueueIndex] = useState(0);

  const current = queue[queueIndex];

  const handleNextMovement = useCallback(() => {
    setQueueIndex((prev) => (prev + 1) % queue.length)
  }, [queue]);

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
      <div className='row fg-0 text-center'>
        {Array.from(word).map((item, index) => (
          <div className={classNames(CSS.wordLetter, {
            [CSS.isActive]: index === current.index,
          })} key={index}>{item}</div>
        ))}
      </div>
      <div className={`${CSS.area} row fg-1`}>
        <div className={CSS.letterBG}>{current.letter}</div>
        <div className={`${CSS.pointer} ${CssPositionMap[current.position]}`} style={{
          transition: `all ${config.speed}ms`,
        }} />
      </div>
    </div>
  );
}
