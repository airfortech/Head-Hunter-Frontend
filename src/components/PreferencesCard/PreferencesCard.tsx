import React from 'react';
import classes from './PreferencesCard.module.css';

interface Props {
  title: string;
  value: string;
  flex?: number;
}

export const PreferencesCard = ({ title, value, flex = 1 }: Props) => {
  return (
    <div className={classes.PreferencesCard} style={{ flex }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};
