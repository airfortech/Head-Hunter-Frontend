import React from 'react';
import classes from './ExternalLink.module.css';

interface Props {
  children: string;
  icon?: string;
  href: string;
}

export const ExternalLink = ({ href, icon, children }: Props) => {
  return (
    <a href={href} className={classes.ExternalLink}>
      {icon && <i className={icon}></i>}
      {children}
    </a>
  );
};
