import React from "react";
import avatar from "../../assets/images/avatar.svg";
import { useAuth } from "../../hooks/useAuth";
import { UserRole } from "../../types";
import classes from "./Avatar.module.css";

interface Props {
  src?: string | null;
  name: string;
  size?: "normal" | "large";
}

export const Avatar = ({ src, name, size = "normal" }: Props) => {
  const { auth } = useAuth();
  return (
    <>
      {auth.role === UserRole.trainee ? (
        <object
          data={src === null ? undefined : src}
          type="image/png"
          className={`${classes.Avatar} ${classes[size]}`}
        >
          <img src={avatar} alt={name} />
        </object>
      ) : (
        <img
          src={avatar}
          alt={name}
          className={`${classes.Avatar} ${classes[size]}`}
        />
      )}
    </>
  );
};
