import React, { useCallback, useEffect, useState } from 'react';
import CSS from './TrainerLetter.module.scss';
import { getLetterQueue, LetterPositionMap, PositionTypes } from '../../models/Letter.model';
import { useConfigReducer } from '../../state/config.reducer';
import classNames from 'classnames';

const CssPositionMap = {
  [PositionTypes.Left]: CSS.Left,
  [PositionTypes.Right]: CSS.Right,
  [PositionTypes.Top]: CSS.Top,
  [PositionTypes.Bottom]: CSS.Bottom,
  [PositionTypes.Center]: CSS.Center,
};

export function TrainerLetter() {
  const [ config ] = useConfigReducer();
  const [ word, setWord ] = useState('Привет');

  const [ letter, setLetter ] = useState(word[0]);
  const [ letterIndex, setLetterIndex ] = useState(0);

  const [ position, setPosition ] = useState(PositionTypes.Center);
  const [ positionIndex, setPositionIndex ] = useState(-1);

  const handleNextLetter = useCallback(() => {
    const nextLetterIndex = (letterIndex + 1) % word.length;
    const nextLetter = word[nextLetterIndex].toUpperCase();
    setLetter(nextLetter);
    setLetterIndex(nextLetterIndex);
    // reset
    setPositionIndex(0);
    setPosition(getLetterQueue(nextLetter)[0]);
  }, [ letterIndex, word ]);

  const handleNextMovement = useCallback(() => {
    const nextPositionIndex = positionIndex + 1;
    const queue = getLetterQueue(letter);

    if (nextPositionIndex >= queue.length) {
      handleNextLetter();
      return;
    }

    setPosition(queue[nextPositionIndex]);
    setPositionIndex(nextPositionIndex);
  }, [ positionIndex, letter, handleNextLetter ]);

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
            [CSS.isActive]: index === letterIndex,
          })} key={index}>{item}</div>
        ))}
      </div>
      <div className={`${CSS.area} row fg-1`}>
        <div className={CSS.letterBG}>{letter}</div>
        <div className={`${CSS.pointer} ${CssPositionMap[position]}`} style={{
          transition: `all ${config.speed}ms`,
        }} />
      </div>
    </div>
  );
}
