import React from "react";
import classes from "./NoteCard.module.css";

interface Props {
  title: string;
  note: number;
  flex?: number;
  stars?: boolean;
}

export const NoteCard = ({ title, note, flex = 1, stars = true }: Props) => {
  const bg = `linear-gradient(90deg, var(--color-15) 0%,var(--color-15) ${
    note * 20
  }%,var(--color-7) ${note * 20}%,var(--color-7) 100%)`;

  return (
    <div className={classes.NoteCard} style={{ flex }}>
      <h3>{title}</h3>
      <div className={classes.note}>
        <p>
          {note}
          <span>/5</span>
        </p>
        {stars && (
          <div className={classes.stars} style={{ backgroundImage: bg }}>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>
        )}
      </div>
    </div>
  );
};
