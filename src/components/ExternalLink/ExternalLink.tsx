import React from 'react';
import classes from './ExternalLink.module.css';

interface Props {
  children: string | JSX.Element | JSX.Element[];
  href: string;
}

export const ExternalLink = ({ href, children }: Props) => {
  return (
    <a href={href} className={classes.ExternalLink}>
      {children}
    </a>
  );
};
