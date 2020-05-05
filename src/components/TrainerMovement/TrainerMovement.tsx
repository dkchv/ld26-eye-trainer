import React, { useCallback, useEffect, useState } from 'react';
import CSS from '../TrainerWord/TrainerWord.module.scss';
import { CssPositionMap } from '../TrainerWord/TrainerWord';
import { getLetter, PositionTypes } from '../../models/Letter.model';
import { useSelector } from 'react-redux';
import { selectConfigStore } from '../../state/config.selectors';
import { Key, KEY_CODE_ESC, KeyMap } from '../../models/Keyboard.model';

export function TrainerMovement() {
  const config = useSelector(selectConfigStore);
  const [ letters, setLetters ] = useState<string[]>([]);
  const [ position, setPosition ] = useState(PositionTypes.Center);
  const [ movements, setMovements ] = useState<Key[]>([]);
  const [ timer, setTimer ] = useState<any>(null);

  const handleNewPosition = useCallback((value: PositionTypes) => {
    if (timer) {
      clearTimeout(timer);
    }
    setPosition(value);
    const newTimer = setTimeout(() => setPosition(PositionTypes.Center), config.speed / 2);
    setTimer(newTimer);
  }, [ timer, config.speed ]);

  const handleNewMovement = useCallback((value: Key) => {
    const newMovement = [
      ...movements,
      value,
    ];
    handleNewPosition(value.position);
    const queue = newMovement.map((item) => item.position) as PositionTypes[];
    const foundLetter = getLetter(queue);
    if (foundLetter) {
      const newLetters = letters.length > 10
        ? [ '...', ...letters.splice(-3), foundLetter ]
        : [ ...letters, foundLetter ];
      setLetters(newLetters);
      setMovements([]);
    } else if (newMovement.length > 3) {
      setMovements([]);
    } else {
      setMovements(newMovement);
    }
  }, [ letters, movements, handleNewPosition ]);

  const handleKeyPress = useCallback((e) => {
    if (e.keyCode === KEY_CODE_ESC) {
      // reset
      if (movements.length > 0) {
        setMovements([]);
      } else {
        setLetters([]);
      }
      return;
    }
    const found = KeyMap.find((item) => item.keyCode === e.keyCode);
    if (!found) {
      return;
    }
    handleNewMovement(found);
  }, [ movements, handleNewMovement ]);

  const handlePlaceholderClick = useCallback((value: PositionTypes) => {
    handleNewMovement(KeyMap.find((item) => item.position === value) as Key);
  }, [ handleNewMovement ]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [ handleKeyPress ]);

  return (
    <div className={CSS.root}>
      <div className={`${CSS.letters} row fg-0 d-flex ai-center`}>
        {letters.length === 0 && movements.length === 0 && (
          <div className='color-gray fs-small'>Начните движения</div>
        )}
        {letters.map((item, index) => (
          <div key={`${item}-${index}`}>{item}</div>
        ))}
        {movements.map((item, index) => (
          <div className='color-blue fs-big' key={`${item.id}-${index}`}>{item.symbol}</div>
        ))}
      </div>
      <div className={`${CSS.area} row fg-1`}>
        <div
          className={`${CSS.placeholder} 
          ${CssPositionMap[PositionTypes.Top]}`}
          onClick={() => handlePlaceholderClick(PositionTypes.Top)}
        />
        <div
          className={`${CSS.placeholder} 
          ${CssPositionMap[PositionTypes.Left]}`}
          onClick={() => handlePlaceholderClick(PositionTypes.Left)}
        />
        <div
          className={`${CSS.placeholder} 
          ${CssPositionMap[PositionTypes.Right]}`}
          onClick={() => handlePlaceholderClick(PositionTypes.Right)}
        />
        <div
          className={`${CSS.placeholder} 
          ${CssPositionMap[PositionTypes.Bottom]}`}
          onClick={() => handlePlaceholderClick(PositionTypes.Bottom)}
        />
        <div
          className={`${CSS.pointer} 
          ${CssPositionMap[position]}`}
          style={{
            transition: `all ${config.speed / 2}ms`,
          }} />
      </div>
    </div>
  );
}
