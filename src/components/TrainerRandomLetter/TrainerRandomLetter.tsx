import CSS from '../TrainerLetter/TrainerLetter.module.scss';
import React, { useState } from 'react';
import { AlphaBet } from '../../models/Letter.model';

export function TrainerRandomLetter() {
  const [word] = useState(() => {
    return Array(20).map(() => {
      const index = Math.floor(Math.random() * AlphaBet.length);
      return AlphaBet[index];
    });
  })

  console.log('--w', word)

  return (
    <div className={CSS.root}>
      {word}
    </div>
  )
}
