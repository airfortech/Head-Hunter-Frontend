import React from 'react';
import classes from './PrimaryButton.module.css';

interface Props {
  children: string;
  type?: 'button' | 'submit';
  size?: 'small' | 'normal' | 'large';
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

export const PrimaryButton = ({ children, type, color, size }: Props) => {
  const sizeClass = size || 'normal';
  const colorClass = color || 'primary';

  return type === 'submit' ? (
    <input
      type="submit"
      value={children}
      className={`${classes.PrimaryButton} ${classes[sizeClass]} ${classes[colorClass]}`}
    />
  ) : (
    <button
      type="button"
      className={`${classes.PrimaryButton} ${classes[sizeClass]} ${classes[colorClass]}`}
    >
      {children}
    </button>
  );
};
