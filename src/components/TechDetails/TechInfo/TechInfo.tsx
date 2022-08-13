import React from "react";
import classes from "./TechInfo.module.css";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  title: string;
  cards?: boolean;
  center?: boolean;
}

export const TechInfo = ({
  children,
  title,
  cards = false,
  center = false,
}: Props) => {
  return (
    <div className={`${classes.TechInfo} ${cards && classes.cards}`}>
      <h2 className={`${center && classes.center}`}>{title}</h2>
      {typeof children === "string" ? (
        <p>{children}</p>
      ) : (
        <div className={`${center && classes.center}`}>{children}</div>
      )}
    </div>
  );
};
