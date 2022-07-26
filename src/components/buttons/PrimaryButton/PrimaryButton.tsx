import React from 'react';
import classes from './PrimaryButton.module.css';

interface Props {
  children: string;
  type?: 'button' | 'submit';
  size?: 'small' | 'normal' | 'large';
  fullWidth?: boolean;
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

export const PrimaryButton = ({
  children,
  type = 'button',
  color = 'primary',
  size = 'normal',
  fullWidth = false,
}: Props) => {
  return (
    <button
      type={type}
      className={`${classes.PrimaryButton} ${classes[size]} ${classes[color]} ${
        fullWidth && classes.fullWidth
      }`}
    >
      {children}
    </button>
  );
};
