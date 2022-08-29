import React from "react";
import { ExternalLink } from "../ExternalLink/ExternalLink";
import classes from "./Authors.module.css";

export const Authors = () => {
  return (
    <div className={classes.Authors}>
      <ExternalLink
        href="https://github.com/airfortech/Head-Hunter-Frontend"
        icon="github"
      >
        Frontend Src
      </ExternalLink>
      <ExternalLink
        href="https://github.com/bialka104b/Head-Hunter-Backend"
        icon="github"
      >
        Backend Src
      </ExternalLink>
    </div>
  );
};
