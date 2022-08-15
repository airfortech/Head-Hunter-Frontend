import { ConvertStudentInfo, UserRole } from "../../types";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Avatar } from "../Avatar/Avatar";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { ExternalLink } from "../ExternalLink/ExternalLink";
import classes from "./PersonalDetails.module.css";

interface Props {
  traineeInfo: ConvertStudentInfo;
}

export const PersonalDetails = ({ traineeInfo }: Props) => {
  const { firstName, lastName, tel, email, bio, githubUsername } = traineeInfo;
  const { auth } = useAuth();
  const navigate = useNavigate();

  const handleEditInfo = () => {
    navigate("settings");
  };

  return (
    <section className={classes.PersonalDetails}>
      <Avatar
        name={firstName + " " + lastName}
        src={githubUsername && "https://github.com/" + githubUsername + ".png"}
        size="large"
      />
      <h1>{firstName + " " + lastName}</h1>
      <ExternalLink href={"https://github.com/" + githubUsername} icon="github">
        {githubUsername}
      </ExternalLink>
      <div className={classes.contact}>
        <p>
          <i className="bx bxs-phone"></i>
          {tel}
        </p>
        <p>
          <i className="bx bxs-envelope"></i>
          {email}
        </p>
      </div>
      <div className={classes.about}>
        <h2>O mnie</h2>
        <p>{bio}</p>
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
