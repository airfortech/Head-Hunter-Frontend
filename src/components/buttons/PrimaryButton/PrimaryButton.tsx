import React from 'react';
import classes from './PrimaryButton.module.css';

interface Props {
  children: string;
  type?: 'button' | 'submit';
}

export const PrimaryButton = ({ children, type }: Props) => {
  return (
    <button type={type} className={classes.PrimaryButton}>
      {children}
    </button>
  );
};
