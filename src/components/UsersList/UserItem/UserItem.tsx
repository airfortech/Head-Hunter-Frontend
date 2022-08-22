import { HrProfileEntity, UsersListType } from "../../../types";
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

interface Props {
  open?: boolean;
  type: UsersListType;
  data: HrProfileEntity;
}

export const UserItem = ({ open = false, type, data }: Props) => {
  const [isDetailsOpen, setDetailsOpen] = useState(open);
  const iconRef = useRef<HTMLElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<GSAPTimeline>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { refreshList } = useSearch();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { userId, fullName, company, maxReservedStudents } = data;

  const linkToCV = (type: string) => {
    if (type === "adminStudent") return "/panel/admin/students/u" + userId;
    if (type === "hrStudentToTalk") return "/panel/hr/students/u" + userId;
    if (type === "hrStudentHired") return "/panel/hr/students/u" + userId;
  };

  const handleToggleDetails = () => {
    setDetailsOpen((prevState) => !prevState);
  };

  const handleDeleteUser = async () => {
    try {
      await fetchDeleteUser({ id: userId });
      closeModal();
      refreshList();
    } catch (e) {
      console.log(e);
      closeModal();
    }
  };
  const handleReserveTalk = (userId: string) => {
    console.log("handleReserveTalk", userId);
  };
  const handleNotInterest = (userId: string) => {
    console.log("handleNotInterest", userId);
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
      <Modal opened={isModalOpen} name="Sort Modal">
        <ConfirmationPrompt
          title="Usuwanie użytkownika"
          question="Czy na pewno usunąć użytkownika?"
          closeModal={closeModal}
          onConfirm={handleDeleteUser}
        />
      </Modal>
      <div className={classes.info}>
        <div className={classes.personal}>
          {type === "hrStudentToTalk" && (
            <p className={classes.reservationDate}>
              Rezerwacja do
              <span>11.07.2022r.</span>
            </p>
          )}
          {type !== "hrStudentAvailable" && <Avatar name="Jakub C" />}
          <p className={classes.name}>{fullName}</p>
        </div>
        <div className={classes.actions}>
          {(type === "adminStudent" ||
            type === "hrStudentToTalk" ||
            type === "hrStudentHired") && (
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
              onClick={() => handleNotInterest(userId)}
            >
              Brak zainteresowania
            </PrimaryButton>
          )}
          {type === "hrStudentAvailable" && (
            <PrimaryButton
              size="normal"
              fontColor="secondary"
              onClick={() => handleReserveTalk(userId)}
            >
              Zarezerwuj rozmowę
            </PrimaryButton>
          )}
          {type === "hrStudentToTalk" && (
            <PrimaryButton
              size="normal"
              fontColor="secondary"
              onClick={() => handleHire(userId)}
            >
              Zatrudnij
            </PrimaryButton>
          )}
          {type === "hrStudentHired" && (
            <PrimaryButton
              size="normal"
              fontColor="secondary"
              onClick={() => handleCancelHire(userId)}
            >
              Anuluj zatrudnienie
            </PrimaryButton>
          )}
          {(type === "adminStudent" || type === "adminHR") && (
            <PrimaryButton
              size="normal"
              fontColor="secondary"
              onClick={openModal}
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
        {type === "adminHR" && (
          <>
            <PreferencesCard title="Nazwa firmy:" value={company} flex={1.5} />
            <PreferencesCard
              title="E-mail:"
              value="mail@google.com"
              flex={1.5}
            />
            <PreferencesCard
              title="Maksymalna liczba rezerwacji:"
              value={maxReservedStudents.toString()}
              flex={1.5}
            />
          </>
        )}
        {type !== "adminHR" && (
          <>
            <NoteCard title="Ocena przejścia kursu" note={1.7} stars={false} />
            <NoteCard
              title="Ocena aktywności i zaangażowania na kursie"
              note={4}
              stars={false}
              flex={1.4}
            />
            <NoteCard
              title="Ocena kodu w projekcie własnym"
              note={4.5}
              stars={false}
            />
            <NoteCard
              title="Ocena pracy w zespole w Scrum"
              note={5}
              stars={false}
            />
            <PreferencesCard title="Preferowane miejsce pracy" value="Biuro" />
            <PreferencesCard
              title="Docelowe miasto, gdzie chce pracować kandydat"
              value="Warszawa"
              flex={1.5}
            />
            <PreferencesCard
              title="Oczekiwany typ kontraktu"
              value="Umowa o pracę"
              flex={1.6}
            />
            <PreferencesCard
              title="Oczekiwane wynagrodzenie miesięczne netto"
              value="8000 zł"
              flex={1.4}
            />
            <PreferencesCard
              title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek"
              value="TAK"
              flex={2}
            />
            <PreferencesCard
              title="Komercyjne doświadczenie w programowaniu"
              value="6 miesięcy"
              flex={1.4}
            />
          </>
        )}
      </div>
    </li>
  );
};
