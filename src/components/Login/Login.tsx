import React from 'react';
import style from './Login.module.css';
import logo from '../../assets/images/logo.png';
import { PrimaryButton } from '../buttons/PrimaryButton/PrimaryButton';

export const Login = () => {
  return (
    <main className={style.login}>
      <img src={logo} alt="MegaK Logo" className={style.logo} />
      <form>
        <p>Email input</p>
        <p>Password input</p>
        <PrimaryButton>Zaloguj się</PrimaryButton>
      </form>
    </main>
  );
};
