import React from 'react';
import { Avatar } from '../../Avatar/Avatar';
import classes from './Menu.module.css';

export const Menu = () => {
  return (
    <menu className={classes.Menu}>
      <div className={classes.userInfo}>
        <Avatar name="John Doe" />
        <p>John Doe</p>
        <button>
          <i className="bx bx-caret-up"></i>
        </button>
      </div>
      <div className={classes.actions}>
        <p>Konto</p>
        <p>Wyloguj</p>
      </div>
    </menu>
  );
};
