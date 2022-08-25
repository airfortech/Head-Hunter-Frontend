import { ConvertStudentInfo, UsersListType } from "../../../types";
import React, { useEffect, useRef, useState } from "react";
import { useSearch } from "../../../hooks/useSearch";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { PrimaryButton } from "../../buttons/PrimaryButton/PrimaryButton";
import { NoteCard } from "../../NoteCard/NoteCard";
import { PreferencesCard } from "../../PreferencesCard/PreferencesCard";
import { Avatar } from "../../Avatar/Avatar";
import { Modal } from "../../Modal/Modal";
import { ConfirmationPrompt } from "../../ConfirmationPrompt/ConfirmationPrompt";
import { fetchDeleteUser } from "../../../utils/fetchDeleteuser";
import classes from "./UserItem.module.css";
import { InfoPrompt } from "../../InfoPrompt/InfoPrompt";

interface Props {
  open?: boolean;
  type: UsersListType;
  data: ConvertStudentInfo;
}

type ModalTypes =
  | "deleteUser"
  | "addInterview"
  | "deleteInterview"
  | "editHr"
  | "none";

interface IsModalOpen {
  active: boolean;
  modalType?: ModalTypes;
}

export const UserItem = ({ open = false, type, data }: Props) => {
  const [isDetailsOpen, setDetailsOpen] = useState(open);
  const iconRef = useRef<HTMLElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<GSAPTimeline>();
  const [isModalOpen, setIsModalOpen] = useState<IsModalOpen>({
    active: false,
  });
  const { refreshList } = useSearch();

  const openModal = (modalType: ModalTypes) =>
    setIsModalOpen({
      active: true,
      modalType,
    });

  const closeModal = () =>
    setIsModalOpen({
      active: false,
      modalType: "none",
    });

  const {
    id,
    firstName,
    lastName,
    githubAvatarSrc,
    courseCompletion,
    courseEngagment,
    projectDegree,
    teamProjectDegree,
    expectedContractType,
    expectedTypeWork,
    targetWorkCity,
    expectedSalary,
    canTakeApprenticeship,
    monthsOfCommercialExp,
  } = data;

  const linkToCV = (type: string) => {
    if (
      type === "adminStudent" ||
      type === "adminStudentAvailable" ||
      type === "adminStudentToTalk" ||
      type === "adminStudentHired"
    )
      return "/panel/admin/students/" + id;
    return "/panel/hr/students/" + id;
  };

  const handleToggleDetails = () => {
    setDetailsOpen((prevState) => !prevState);
  };

  const handleDeleteUser = async () => {
    try {
      await fetchDeleteUser({ id });
      closeModal();
      refreshList();
    } catch (e) {
      console.log(e);
      closeModal();
    }
  };

  const handleHire = (userId: string) => {
    console.log("handleHire", userId);
  };
  const handleCancelHire = (userId: string) => {
    console.log("handleCancelHire", userId);
  };

  useEffect(() => {
    const detailsItems = detailsRef.current?.children;

    if (!detailsItems?.length) return;

    tweenRef.current = gsap
      .timeline()
      .to(iconRef.current, {
        ease: "power2",
        rotation: 180,
        duration: 0.2,
      })
      .to(
        detailsRef.current,
        {
          ease: "power2",
          height: "auto",
          duration: 0.2,
        },
        "<+=0.1"
      )
      .fromTo(
        detailsItems,
        { opacity: 0 },
        {
          ease: "power2",
          opacity: 1,
          duration: 0.2,
          stagger: 0.018,
        },
        "<+=0.1"
      );
    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (isDetailsOpen) {
      tweenRef.current?.play();
    } else {
      tweenRef.current?.reverse();
    }
  }, [isDetailsOpen]);

  return (
    <li className={classes.StudentItem}>
      <Modal opened={isModalOpen.active} name="Sort Modal">
        {isModalOpen.modalType === "deleteUser" ? (
          <ConfirmationPrompt
            title="Usuwanie użytkownika"
            question={`Czy na pewno usunąć użytkownika ${firstName} ${lastName}?`}
            closeModal={closeModal}
            onConfirm={handleDeleteUser}
          />
        ) : isModalOpen.modalType === "addInterview" ? (
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
        ) : (
          <div></div>
        )}
      </Modal>
      <div className={classes.info}>
        <div className={classes.personal}>
          {type !== "hrStudentAvailable" && (
            <Avatar name="Jakub C" src={githubAvatarSrc} />
          )}
          <p className={classes.name}>{`${firstName} ${
            type === "hrStudentAvailable" ? lastName[0] + "." : lastName
          }`}</p>
        </div>
        <div className={classes.actions}>
          {type !== "adminHR" && (
            <NavLink to={{ pathname: linkToCV(type) }}>
              <PrimaryButton size="normal" fontColor="secondary">
                Pokaż CV
              </PrimaryButton>
            </NavLink>
          )}
          {type === "hrStudentToTalk" && (
            <PrimaryButton
              size="normal"
              fontColor="secondary"
              onClick={() => openModal("deleteInterview")}
            >
              Brak zainteresowania
            </PrimaryButton>
          )}
          {type === "hrStudentAvailable" && (
            <PrimaryButton
              size="normal"
              fontColor="secondary"
              onClick={() => openModal("addInterview")}
            >
              Zarezerwuj rozmowę
            </PrimaryButton>
          )}
          {type === "hrStudentToTalk" && (
            <PrimaryButton
              size="normal"
              fontColor="secondary"
              onClick={() => handleHire(id)}
            >
              Zatrudnij
            </PrimaryButton>
          )}
          {type === "hrStudentHired" && (
            <PrimaryButton
              size="normal"
              fontColor="secondary"
              onClick={() => handleCancelHire(id)}
            >
              Anuluj zatrudnienie
            </PrimaryButton>
          )}
          {type === "adminHR" && (
            <PrimaryButton
              size="normal"
              fontColor="secondary"
              onClick={() => openModal("editHr")}
            >
              Edytuj
            </PrimaryButton>
          )}
          {(type === "adminStudent" || type === "adminHR") && (
            <PrimaryButton
              size="normal"
              fontColor="secondary"
              onClick={() => openModal("deleteUser")}
            >
              Usuń użytkownika
            </PrimaryButton>
          )}
          <button className={classes.button} onClick={handleToggleDetails}>
            <i className="bx bx-chevron-up" ref={iconRef}></i>
          </button>
        </div>
      </div>
      <div className={classes.details} ref={detailsRef}>
        <NoteCard
          title="Ocena przejścia kursu"
          note={courseCompletion}
          stars={false}
        />
        <NoteCard
          title="Ocena aktywności i zaangażowania na kursie"
          note={courseEngagment}
          stars={false}
          flex={1.4}
        />
        <NoteCard
          title="Ocena kodu w projekcie własnym"
          note={projectDegree}
          stars={false}
        />
        <NoteCard
          title="Ocena pracy w zespole w Scrum"
          note={teamProjectDegree}
          stars={false}
        />
        <PreferencesCard
          title="Preferowane miejsce pracy"
          value={expectedTypeWork}
        />
        <PreferencesCard
          title="Docelowe miasto, gdzie chce pracować kandydat"
          value={targetWorkCity}
          flex={1.5}
        />
        <PreferencesCard
          title="Oczekiwany typ kontraktu"
          value={expectedContractType}
          flex={1.6}
        />
        <PreferencesCard
          title="Oczekiwane wynagrodzenie miesięczne netto"
          value={expectedSalary + "zł"}
          flex={1.4}
        />
        <PreferencesCard
          title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek"
          value={canTakeApprenticeship}
          flex={2}
        />
        <PreferencesCard
          title="Komercyjne doświadczenie w programowaniu"
          value={monthsOfCommercialExp}
          flex={1.4}
        />
      </div>
    </li>
  );
};
