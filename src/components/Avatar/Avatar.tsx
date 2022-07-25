import React from 'react';
import avatar from '../../assets/images/avatar.svg';
import classes from './Avatar.module.css';

interface Props {
  src?: string;
  name?: string;
  size?: 'normal' | 'large';
}

export const Avatar = ({ src, name, size = 'normal' }: Props) => {
  return (
    <img
      className={`${classes.Avatar} ${classes[size]}`}
      src={src || avatar}
      alt={name || 'No avatar provided'}
    />
  );
};
