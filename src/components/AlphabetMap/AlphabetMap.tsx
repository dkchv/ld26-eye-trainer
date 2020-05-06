import React, { useState } from 'react';
import { AlphaBet, getLetterQueue, PositionTypes } from '../../models/Letter.model';
import CSS from './AlphabetMap.module.scss';

const cssMap = {
  [PositionTypes.Top]: CSS.top,
  [PositionTypes.Right]: CSS.right,
  [PositionTypes.Left]: CSS.left,
  [PositionTypes.Bottom]: CSS.bottom,
};

function WrapItem({ position, children }) {
  return (
    <div className={cssMap[position]}>{children}</div>
  );
}

export function AlphabetMap() {
  const [ letters ] = useState(Array.from(AlphaBet));

  return (
    <div className={`${CSS.map} fg-1 debug`}>
      <div className={CSS.center} />
      {letters.map((letter) => {
          const queue = getLetterQueue(letter) as PositionTypes[];
          const letterBox = <div className={CSS.letter}>{letter}</div>;
          return (
            <div className={CSS.vector}>
              {queue.reduce((memo, position) => (
                <WrapItem position={position}>{memo}</WrapItem>
              ), letterBox)}
            </div>
          );
        },
      )}
    </div>
  );
}
