import React from 'react';
import { Header } from '../../components/Header/Header';
import { PersonalDetails } from '../../components/PersonalDetails/PersonalDetails';
import classes from './CVView.module.css';

export const CVView = () => {
  return (
    <div className={classes.CVView}>
      <Header />
      <div className={classes.wrapper}>
        <PersonalDetails />
        <section className={classes.proffesionalDetails}>
          <p>Oceny</p>
        </section>
      </div>
    </div>
  );
};
