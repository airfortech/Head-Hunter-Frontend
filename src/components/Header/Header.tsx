import React from 'react';
import { Menu } from './Menu/Menu';
import logo from '../../assets/images/logo.png';
import classes from './Header.module.css';

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
