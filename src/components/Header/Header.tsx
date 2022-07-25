import React from 'react';
import logo from '../../assets/images/logo.png';
import classes from './Header.module.css';
import { Menu } from './Menu/Menu';

export const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.wrapper}>
        <img src={logo} alt="Logo" className={classes.logo} />
        <Menu />
      </div>
    </header>
  );
};
