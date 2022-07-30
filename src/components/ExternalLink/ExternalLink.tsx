import React from "react";
import classes from "./ExternalLink.module.css";

interface Props {
  children?: string;
  icon?: "web" | "github";
  href: string;
}

enum Icons {
  web = "bx bx-link-alt",
  github = "bx bxl-github",
}

export const ExternalLink = ({ href, icon, children }: Props) => {
  return (
    <a href={href} className={classes.ExternalLink}>
      {icon && <i className={Icons[icon]}></i>}
      {children || href}
    </a>
  );
};
