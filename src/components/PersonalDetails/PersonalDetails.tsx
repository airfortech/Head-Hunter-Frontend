import React from 'react';
import { Avatar } from '../Avatar/Avatar';
import { PrimaryButton } from '../buttons/PrimaryButton/PrimaryButton';
import classes from './PersonalDetails.module.css';

export const PersonalDetails = () => {
  return (
    <section className={classes.PersonalDetails}>
      <Avatar name="Jan Kowalski" size="large" />
      <h1>Jan Kowalski</h1>
      <p>github: jankowalski</p>
      <div className={classes.contact}>
        <p>+48 434 343 434</p>
        <p>email@dlala.pl</p>
      </div>
      <div className={classes.about}>
        <h2>O mnie</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a
          architecto iusto rerum corporis molestias iste vitae ipsum adipisci
          velit, neque consectetur natus provident nihil itaque magni officia in
          numquam.
        </p>
      </div>
      <PrimaryButton size="large">Brak zainteresowania</PrimaryButton>
      <PrimaryButton size="large">Zatrudniony</PrimaryButton>
    </section>
  );
};
