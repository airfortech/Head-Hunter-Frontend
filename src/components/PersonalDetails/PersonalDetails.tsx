import { ConvertStudentInfo, TraineeStatus, UserRole } from "../../types";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Avatar } from "../Avatar/Avatar";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { ExternalLink } from "../ExternalLink/ExternalLink";
import { InfoPrompt } from "../InfoPrompt/InfoPrompt";
import { Modal } from "../Modal/Modal";
import classes from "./PersonalDetails.module.css";
import { ConfirmationPrompt } from "../ConfirmationPrompt/ConfirmationPrompt";

interface Props {
  traineeInfo: ConvertStudentInfo;
  id: string | undefined;
  setRefresh: Dispatch<SetStateAction<number>>;
}

type ModalTypes =
  | "addInterview"
  | "deleteInterview"
  | "hire"
  | "approveHireConfirmation"
  | "approveHireInfo"
  | "none";

interface IsModalOpen {
  active: boolean;
  modalType?: ModalTypes;
}

export const PersonalDetails = ({ traineeInfo, id, setRefresh }: Props) => {
  const {
    firstName,
    lastName,
    tel,
    email,
    bio,
    githubUsername,
    githubSrc,
    githubAvatarSrc,
    status,
  } = traineeInfo;
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<IsModalOpen>({
    active: false,
  });

  const name =
    firstName + lastName === "emptyempty"
      ? "Użytkownik anonimowy"
      : firstName + " " + lastName;

  const openModal = (modalType: ModalTypes) =>
    setIsModalOpen({
      active: true,
      modalType,
    });

  const closeModal = () => {
    setIsModalOpen({
      active: false,
      modalType: "none",
    });
    setRefresh((prevState) => prevState + 1);
  };

  const handleEditInfo = () => {
    navigate("settings");
  };

  return (
    <section className={classes.PersonalDetails}>
      <Modal opened={isModalOpen.active} name="Sort Modal">
        {isModalOpen.modalType === "addInterview" ? (
          <InfoPrompt
            title="Potwierdzenie interview"
            purpose="addInterview"
            info={`Użytkownik: ${firstName} ${lastName}`}
            id={id}
            closeModal={closeModal}
          />
        ) : isModalOpen.modalType === "deleteInterview" ? (
          <InfoPrompt
            title="Potwierdzenie rezygnacji"
            purpose="deleteInterview"
            info={`Użytkownik: ${firstName} ${lastName}`}
            id={id}
            closeModal={closeModal}
          />
        ) : isModalOpen.modalType === "hire" ? (
          <InfoPrompt
            title="Potwierdzenie zatrudnienia"
            purpose="hire"
            info={`Czy chcesz zatrudnić użytkownika ${firstName} ${lastName}?`}
            id={id}
            closeModal={closeModal}
          />
        ) : isModalOpen.modalType === "approveHireInfo" ? (
          <InfoPrompt
            title="Potwierdzenie zatrudnienia"
            purpose="approveHireInfo"
            info={`Za chwilę stracisz dostęp do platformy.`}
            id={id}
            closeModal={closeModal}
          />
        ) : isModalOpen.modalType === "approveHireConfirmation" ? (
          <ConfirmationPrompt
            title="Potwierdzenie zatrudnienia"
            question={`Czy chcesz potwierdzić zatrudnienie? Czynność ta spowoduje blokadę dostępu do platformy.`}
            closeModal={closeModal}
            onConfirm={() => openModal("approveHireInfo")}
          />
        ) : (
          <div></div>
        )}
      </Modal>
      <Avatar name={name} src={githubAvatarSrc} size="large" />
      <h1>{name}</h1>
      <ExternalLink href={githubSrc} icon="github">
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
      {auth.role === UserRole.hr && status === TraineeStatus.available && (
        <PrimaryButton
          size="large"
          fontColor="secondary"
          fullWidth
          onClick={() => openModal("addInterview")}
        >
          Zarezerwuj rozmowę
        </PrimaryButton>
      )}
      {auth.role === UserRole.hr && status === TraineeStatus.interviewed && (
        <PrimaryButton
          size="large"
          fontColor="secondary"
          fullWidth
          onClick={() => openModal("deleteInterview")}
        >
          Brak zainteresowania
        </PrimaryButton>
      )}
      {auth.role === UserRole.hr && status === TraineeStatus.interviewed && (
        <PrimaryButton
          size="large"
          fontColor="secondary"
          fullWidth
          onClick={() => openModal("hire")}
        >
          Zatrudnij
        </PrimaryButton>
      )}
      {auth.role === UserRole.trainee && (
        <PrimaryButton
          size="large"
          fontColor="secondary"
          fullWidth
          onClick={() => openModal("approveHireConfirmation")}
        >
          Zatrudniony
        </PrimaryButton>
      )}
      {auth.role === UserRole.trainee && (
        <PrimaryButton
          size="large"
          color="primary"
          fontColor="secondary"
          fullWidth
          onClick={handleEditInfo}
        >
          Edytuj informacje
        </PrimaryButton>
      )}
    </section>
  );
};
