import React from "react";
import classes from "./TechInfo.module.css";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  title: string;
  cards?: boolean;
}

export const TechInfo = ({ children, title, cards = false }: Props) => {
  return (
    <div className={`${classes.TechInfo} ${cards && classes.cards}`}>
      <h2>{title}</h2>
      {typeof children === "string" ? <p>{children}</p> : <div>{children}</div>}
    </div>
  );
};
