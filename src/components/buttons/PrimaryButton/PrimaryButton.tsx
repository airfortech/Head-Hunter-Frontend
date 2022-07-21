import React from 'react';
import classes from './PrimaryButton.module.css';

export interface Props {
  children: string;
  type?: 'button' | 'submit';
}

export const PrimaryButton = ({ children, type }: Props) => {
  return type === 'button' ? (
    <button type="button" className={classes.PrimaryButton}>
      {children}
    </button>
  ) : (
    <button type="submit" className={classes.PrimaryButton}>
      {children}
    </button>
  );
};
