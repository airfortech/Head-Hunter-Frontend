import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/images/logo.png';

export const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.wrapper}>
        <img src={logo} alt="Logo" className={classes.logo} />
      </div>
    </header>
  );
};
