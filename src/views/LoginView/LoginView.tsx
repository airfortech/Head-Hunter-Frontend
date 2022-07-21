import React from 'react';
import { Login } from '../../components/Login/Login';
import style from './LoginView.module.css';

export const LoginView = () => {
  return (
    <div className={style.loginView}>
      <Login />
    </div>
  );
};
