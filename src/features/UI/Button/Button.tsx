import React, { ButtonHTMLAttributes, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import CSS from './Button.module.scss';

const buttonColorMap = {
  'primary': CSS.primary,
  'secondary': CSS.secondary,
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary';
  to?: string;
}

export function Button({ color = 'primary', to, onClick, children, ...props }: ButtonProps) {
  const history = useHistory();
  const handleClick = useCallback((e) => {
    if (to) {
      history.push(to);
    }
    if (onClick) {
      onClick(e);
    }
  }, [ history, to, onClick ]);

  return (
    <div className={`${CSS.root} ${buttonColorMap[color]}`}>
      <button
        onClick={handleClick}
        className={CSS.button}
        {...props}
      >{children}</button>
    </div>
  );
}
