import React from 'react';
import { Avatar } from '../Avatar/Avatar';
import logo from '../../assets/images/logo.png';
import classes from './Header.module.css';

export const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.wrapper}>
        <img src={logo} alt="Logo" className={classes.logo} />
        <Avatar />
      </div>
    </header>
  );
};
