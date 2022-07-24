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
  color,
  size,
}: Props) => {
  const sizeClass = size || 'normal';
  const colorClass = color || 'primary';

  return (
    <button
      type={type}
      className={`${classes.PrimaryButton} ${classes[sizeClass]} ${classes[colorClass]}`}
    >
      {children}
    </button>
  );
};
