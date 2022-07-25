import React from 'react';
import classes from './PrimaryButton.module.css';

interface Props {
  children: string;
  type?: 'button' | 'submit';
  size?: 'small' | 'normal' | 'large';
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

export const PrimaryButton = ({
  children,
  type = 'button',
  color = 'primary',
  size = 'normal',
}: Props) => {
  return (
    <button
      type={type}
      className={`${classes.PrimaryButton} ${classes[size]} ${classes[color]}`}
    >
      {children}
    </button>
  );
};
