import React from "react";
import avatar from "../../assets/images/avatar.svg";
import classes from "./Avatar.module.css";

interface Props {
  src?: string | null;
  name: string;
  size?: "normal" | "large";
}

export const Avatar = ({ src, name, size = "normal" }: Props) => {
  return (
    <object
      data={src === null ? undefined : src}
      type="image/png"
      className={`${classes.Avatar} ${classes[size]}`}
    >
      <img src={avatar} alt={name} />
    </object>
  );
};
