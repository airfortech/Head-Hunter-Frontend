import React from 'react';
import classes from './Input.module.css';

interface Props {
  type: 'text' | 'password' | 'email';
  placeholder: string;
}

export const Input = ({ type, placeholder }: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classes.Input}
      required
    />
  );
};
