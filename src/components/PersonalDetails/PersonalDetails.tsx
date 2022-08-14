import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { UserRole } from "../../types";
import { Avatar } from "../Avatar/Avatar";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { ExternalLink } from "../ExternalLink/ExternalLink";
import classes from "./PersonalDetails.module.css";

export const PersonalDetails = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const handleEditInfo = () => {
    navigate("settings");
  };

  return (
    <section className={classes.PersonalDetails}>
      <Avatar name="Jan Kowalski" size="large" />
      <h1>Jan Kowalski</h1>
      <ExternalLink href="/" icon="github">
        jankowalski
      </ExternalLink>
      <div className={classes.contact}>
        <p>
          <i className="bx bxs-phone"></i>+48 434 343 434
        </p>
        <p>
          <i className="bx bxs-envelope"></i>jankowalski@dlala.pl
        </p>
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
      {auth.role === UserRole.hr && (
        <PrimaryButton size="large" fullWidth>
          Brak zainteresowania
        </PrimaryButton>
      )}
      {auth.role === UserRole.hr && (
        <PrimaryButton size="large" fullWidth>
          Zatrudniony
        </PrimaryButton>
      )}
      {auth.role === UserRole.trainee && (
        <PrimaryButton
          size="large"
          color="primary"
          fullWidth
          onClick={handleEditInfo}
        >
          Edytuj informacje
        </PrimaryButton>
      )}
    </section>
  );
};
