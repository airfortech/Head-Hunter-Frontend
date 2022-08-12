import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { PrimaryButton } from "../../buttons/PrimaryButton/PrimaryButton";
import { NoteCard } from "../../NoteCard/NoteCard";
import { PreferencesCard } from "../../PreferencesCard/PreferencesCard";
import { Avatar } from "../../Avatar/Avatar";
import classes from "./StudentItem.module.css";

interface Props {
  open?: boolean;
  type:
    | "adminHR"
    | "adminStudent"
    | "hrStudentAvailable"
    | "hrStudentToTalk"
    | "hrStudentHired";
  id: string;
}

export const StudentItem = ({ open = true, type, id }: Props) => {
  const [isDetailsOpen, setDetailsOpen] = useState(open);
  const iconRef = useRef<HTMLElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<GSAPTimeline>();

  const linkToCV = (type: string) => {
    if (type === "adminStudent") return "/panel/admin/students/" + id;
    if (type === "hrStudentToTalk") return "/panel/hr/students/" + id;
    if (type === "hrStudentHired") return "/panel/hr/students/" + id;
  };

  const handleToggleMenu = () => {
    setDetailsOpen((prevState) => !prevState);
  };

  const handleDeleteUser = (id: string) => {
    console.log("handleDeleteUser", id);
  };
  const handleReserveTalk = (id: string) => {
    console.log("handleReserveTalk", id);
  };
  const handleNotInterest = (id: string) => {
    console.log("handleNotInterest", id);
  };
  const handleHire = (id: string) => {
    console.log("handleHire", id);
  };
  const handleCancelHire = (id: string) => {
    console.log("handleCancelHire", id);
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
      <div className={classes.info}>
        <div className={classes.personal}>
          {type === "hrStudentToTalk" && (
            <p className={classes.reservationDate}>
              Rezerwacja do
              <span>11.07.2022r.</span>
            </p>
          )}
          {type !== "hrStudentAvailable" && <Avatar name="Jakub C" />}
          <p className={classes.name}>Jakub C.</p>
        </div>
        <div className={classes.actions}>
          {(type === "adminStudent" ||
            type === "hrStudentToTalk" ||
            type === "hrStudentHired") && (
            <NavLink to={{ pathname: linkToCV(type) }}>
              <PrimaryButton size="normal">Pokaż CV</PrimaryButton>
            </NavLink>
          )}
          {type === "hrStudentToTalk" && (
            <PrimaryButton size="normal" onClick={() => handleNotInterest(id)}>
              Brak zainteresowania
            </PrimaryButton>
          )}
          {type === "hrStudentAvailable" && (
            <PrimaryButton size="normal" onClick={() => handleReserveTalk(id)}>
              Zarezerwuj rozmowę
            </PrimaryButton>
          )}
          {type === "hrStudentToTalk" && (
            <PrimaryButton size="normal" onClick={() => handleHire(id)}>
              Zatrudnij
            </PrimaryButton>
          )}
          {type === "hrStudentHired" && (
            <PrimaryButton size="normal" onClick={() => handleCancelHire(id)}>
              Anuluj zatrudnienie
            </PrimaryButton>
          )}
          {(type === "adminStudent" || type === "adminHR") && (
            <PrimaryButton size="normal" onClick={() => handleDeleteUser(id)}>
              Usuń użytkownika
            </PrimaryButton>
          )}
          <button className={classes.button} onClick={handleToggleMenu}>
            <i className="bx bx-chevron-up" ref={iconRef}></i>
          </button>
        </div>
      </div>
      <div className={classes.details} ref={detailsRef}>
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
      </div>
    </li>
  );
};
