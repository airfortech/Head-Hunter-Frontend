import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './TabsNavigation.module.css';

interface Props {
  routes: {
    anchor: string;
    route: string;
  }[];
}

export const TabsNavigation = ({ routes }: Props) => {
  const isLinkActive = ({ isActive }: any) =>
    isActive ? `${classes.link} ${classes.active}` : classes.link;

  return (
    <nav className={classes.TabsNavigation}>
      <ul className={classes.wrapper}>
        {routes.map(({ anchor, route }, i) => (
          <li key={i}>
            <NavLink to={route} className={isLinkActive}>
              {anchor}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
