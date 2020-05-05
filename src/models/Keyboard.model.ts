import { PositionTypes } from './Letter.model';

export const KEY_CODE_ESC = 27;

export interface Key {
  id: string;
  keyCode: number;
  symbol: string;
  position: PositionTypes;
}

export const KeyMap: Key[] = [
  {
    id: 'Left',
    keyCode: 37,
    symbol: '←',
    position: PositionTypes.Left,
  },
  {
    id: 'Up',
    keyCode: 38,
    symbol: '↑',
    position: PositionTypes.Top,
  },
  {
    id: 'Right',
    keyCode: 39,
    symbol: '→',
    position: PositionTypes.Right,
  },
  {
    id: 'Bottom',
    keyCode: 40,
    symbol: '↓',
    position: PositionTypes.Bottom,
  },
];
