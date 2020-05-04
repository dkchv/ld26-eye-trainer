export enum PositionTypes {
  Left = 'Left',
  Right = 'Right',
  Top = 'Top',
  Bottom = 'Bottom',
  Center = 'Center',
}

export interface PositionTick {
  letter: string;
  index?: number; // of letter
  position: PositionTypes;
}

export const AlphaBet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЫЭЮЯ';

export const LetterPositionMap2: PositionTypes[][] = [
  [ PositionTypes.Left, PositionTypes.Top, PositionTypes.Left ], // А
  [ PositionTypes.Left, PositionTypes.Top, PositionTypes.Right ], // Б
  [ PositionTypes.Left, PositionTypes.Bottom, PositionTypes.Left ], // В
  [ PositionTypes.Left, PositionTypes.Bottom, PositionTypes.Right ], // Г
  [ PositionTypes.Left, PositionTypes.Left, PositionTypes.Top ], // Д
  [ PositionTypes.Left, PositionTypes.Left, PositionTypes.Bottom ], // Е
  [ PositionTypes.Left, PositionTypes.Top, PositionTypes.Left, PositionTypes.Left ], // Ё
  [ PositionTypes.Right, PositionTypes.Top, PositionTypes.Right ], // Ж
  [ PositionTypes.Right, PositionTypes.Bottom, PositionTypes.Left ], // З
  [ PositionTypes.Right, PositionTypes.Bottom, PositionTypes.Right ], // И
  [ PositionTypes.Right, PositionTypes.Bottom, PositionTypes.Right, PositionTypes.Right ], // Й
  [ PositionTypes.Right, PositionTypes.Right, PositionTypes.Bottom ], // К
  [ PositionTypes.Top, PositionTypes.Left, PositionTypes.Left ], // Л
  [ PositionTypes.Top, PositionTypes.Left, PositionTypes.Top ], // М
  [ PositionTypes.Top, PositionTypes.Left, PositionTypes.Bottom ], // Н
  [ PositionTypes.Top, PositionTypes.Right, PositionTypes.Right ], // О
  [ PositionTypes.Top, PositionTypes.Right, PositionTypes.Top ], // П
  [ PositionTypes.Top, PositionTypes.Right, PositionTypes.Bottom ], // Р
  [ PositionTypes.Bottom, PositionTypes.Left, PositionTypes.Left ], // С
  [ PositionTypes.Bottom, PositionTypes.Left, PositionTypes.Top ], // Т
  [ PositionTypes.Bottom, PositionTypes.Left, PositionTypes.Bottom ], // У
  [ PositionTypes.Right, PositionTypes.Top, PositionTypes.Left ], // Ф
  [ PositionTypes.Bottom, PositionTypes.Right, PositionTypes.Top ], // Х
  [ PositionTypes.Left, PositionTypes.Left, PositionTypes.Top, PositionTypes.Top ], // Ц
  [ PositionTypes.Left, PositionTypes.Top, PositionTypes.Right, PositionTypes.Right ], // Ч
  [ PositionTypes.Left, PositionTypes.Bottom, PositionTypes.Left, PositionTypes.Left ], // Ш
  [ PositionTypes.Left, PositionTypes.Bottom, PositionTypes.Right, PositionTypes.Right ], // Щ
  [ PositionTypes.Left, PositionTypes.Left, PositionTypes.Bottom, PositionTypes.Bottom ], // Ы
  [ PositionTypes.Bottom, PositionTypes.Right, PositionTypes.Bottom ], // Э
  [ PositionTypes.Bottom, PositionTypes.Right, PositionTypes.Right ], // Ю
  [ PositionTypes.Right, PositionTypes.Right, PositionTypes.Top ], // Я
];

export function getLetterQueue(value: string): PositionTypes[] | null {
  if (!value) {
    console.warn('can\'t get queue for no value', value);
    return null;
  }
  const letterIndex = AlphaBet.indexOf(value.toUpperCase());
  if (letterIndex === -1) {
    console.warn('queue for letter not found', value);
    return null;
  }
  return LetterPositionMap2[letterIndex];
}


export const LetterErrorTick: PositionTick = {
  letter: '?',
  position: PositionTypes.Center,
};

export const LetterPauseTick: PositionTick = {
  letter: '',
  position: PositionTypes.Center,
};

export function getWordQueue(value: string): PositionTick[] {
  if (!value) {
    return [ LetterErrorTick ];
  }
  const res = [ LetterPauseTick ];

  Array.from(value).forEach((letter: string, index) => {
    const letterQueue = getLetterQueue(letter);
    if (!letterQueue) {
      res.push(LetterErrorTick);
      res.push({
        ...LetterPauseTick,
        letter: '?'
      });
      return;
    }
    letterQueue.forEach((position) => {
      res.push({
        letter,
        position,
        index,
      });
      res.push({
        letter,
        position: PositionTypes.Center,
        index,
      });
    });
  });
  res.push(LetterPauseTick);

  console.log('--rr', res)
  return res;
}
