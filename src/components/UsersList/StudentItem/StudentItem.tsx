import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { PrimaryButton } from "../../buttons/PrimaryButton/PrimaryButton";
import { NoteCard } from "../../NoteCard/NoteCard";
import { PreferencesCard } from "../../PreferencesCard/PreferencesCard";
import classes from "./StudentItem.module.css";

interface Props {
  open?: boolean;
}

export const StudentItem = ({ open = false }: Props) => {
  const [isDetailsOpen, setDetailsOpen] = useState(open);
  const iconRef = useRef<HTMLElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<GSAPTimeline>();

  const handleClick = () => {
    setDetailsOpen((prevState) => !prevState);
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
        "<-=0.15"
      )
      .fromTo(
        detailsItems,
        { opacity: 0 },
        {
          ease: "power2",
          opacity: 1,
          duration: 0.2,
          stagger: 0.01,
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
        <p className={classes.name}>Jakub C.</p>
        <div className={classes.actions}>
          <PrimaryButton size="normal">Zarezerwuj rozmowę</PrimaryButton>
          <button className={classes.button} onClick={handleClick}>
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
