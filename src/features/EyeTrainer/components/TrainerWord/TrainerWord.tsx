import React, { useCallback, useEffect, useState } from 'react';
import CSS from './TrainerWord.module.scss';
import { getWordQueue, PositionTypes, wordParse } from '../../../../models/Letter.model';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { selectConfigStore } from '../../state/EyeTrainer.selectors';
import { FiCheck, FiEdit } from 'react-icons/fi';

export const CssPositionMap = {
  [PositionTypes.Left]: CSS.Left,
  [PositionTypes.Right]: CSS.Right,
  [PositionTypes.Top]: CSS.Top,
  [PositionTypes.Bottom]: CSS.Bottom,
  [PositionTypes.Center]: CSS.Center,
};

export function TrainerWord() {
  const config = useSelector(selectConfigStore);
  const [ word, setWord ] = useState('ПРИВЕТ');
  const [ isEditing, setIsEditing ] = useState(false);

  const [ queue, setQueue ] = useState(() => getWordQueue(word));
  const [ queueIndex, setQueueIndex ] = useState(0);

  const current = queue[queueIndex];

  const handleNextMovement = useCallback(() => {
    setQueueIndex((prev) => (prev + 1) % queue.length);
  }, [ queue ]);

  useEffect(() => {
    const timer = setInterval(handleNextMovement, config.speed);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [ handleNextMovement, config ]);

  const handleEditEnter = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleEditExit = useCallback(() => {
    const newWord = wordParse(word);
    setIsEditing(false);
    setQueue(getWordQueue(newWord));
    setWord(newWord);
    setQueueIndex(0);
  }, [ word ]);

  const handleWordChange = useCallback((e) => {
    setWord(e.target.value);
  }, []);

  return (
    <div className={CSS.root}>
      {!isEditing
        ? [
          <div key='word' className={`${CSS.word} row fg-0 pointer`} onClick={handleEditEnter}>
            <div className='col text-center'>
              {Array.from(word).map((item, index) => (
                <div className={classNames(CSS.wordLetter, {
                  [CSS.isActive]: index === current.index,
                })} key={index}>{item}</div>
              ))}
            </div>
            <div className={`${CSS.editButton} col button-icon small`}>
              <FiEdit />
            </div>
          </div>,
          <div key='area' className={`${CSS.area} row fg-1`}>
            <div className={CSS.letterBG}>{current.letter}</div>
            <div className={`${CSS.pointer} ${CssPositionMap[current.position]}`} style={{
              transition: `all ${config.speed}ms`,
            }} />
          </div>,
        ]
        : (
          <div className='row fg-0 text-center'>
            <form onSubmit={handleEditExit}>
              <input
                className='col fs-small'
                type='text'
                value={word}
                onChange={handleWordChange}
              />
              <div className='col button-icon small' onClick={handleEditExit}>
                <FiCheck />
              </div>
            </form>
          </div>
        )
      }

    </div>
  );
}
