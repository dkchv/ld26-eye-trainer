import React, { useState } from 'react';
import { AlphaBet, getLetterQueue, PositionTypes } from '../../../../models/Letter.model';
import { Key, KeyMap } from '../../../../models/Keyboard.model';
import CSS from './Alphabet.module.scss';

export function Alphabet() {
  const [ letters ] = useState(Array.from(AlphaBet));
  return (
    <div className='fg-1'>
      {letters.map((letter) => (
        <div className='row row-divided d-flex ai-center'>
          <div className={`${CSS.letter} col`}>{letter}</div>
          <div className='col d-flex'>
            {(getLetterQueue(letter) as PositionTypes[]).map((position, index) => {
              const key = KeyMap.find((item) => item.position === position) as Key;
              return (
                <div key={`${key.id}-${index}`} className='fs-big color-blue'>{key.symbol}</div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
