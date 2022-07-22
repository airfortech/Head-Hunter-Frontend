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
        <PrimaryButton color="secondary" size="small">
          Zaloguj się
        </PrimaryButton>
        <PrimaryButton color="tertiary" size="small">
          Zaloguj się
        </PrimaryButton>
        <PrimaryButton type="submit" color="quaternary" size="large">
          Zaloguj się 2
        </PrimaryButton>
      </form>
    </main>
  );
};
