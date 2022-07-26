import React from 'react';
import classes from './NoteCard.module.css';

interface Props {
  title: string;
  note: number;
  flex?: number;
}

export const NoteCard = ({ title, note, flex = 1 }: Props) => {
  return (
    <div className={classes.NoteCard} style={{ flex }}>
      <h3>{title}</h3>
      <p>
        {note}
        <span>/5</span>
      </p>
    </div>
  );
};
