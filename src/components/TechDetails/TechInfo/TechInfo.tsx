import React from 'react';
import classes from './TechInfo.module.css';

interface Props {
  children: any;
  title: string;
}

export const TechInfo = ({ children, title }: Props) => {
  return (
    <div className={classes.TechInfo}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};
