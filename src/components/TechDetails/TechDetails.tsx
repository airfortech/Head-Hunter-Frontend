import { ConvertStudentInfo } from "../../types";
import React from "react";
import { TechInfo } from "./TechInfo/TechInfo";
import { ExternalLink } from "../ExternalLink/ExternalLink";
import { PreferencesCard } from "../PreferencesCard/PreferencesCard";
import { NoteCard } from "../NoteCard/NoteCard";
import classes from "./TechDetails.module.css";

interface Props {
  traineeInfo: ConvertStudentInfo;
}

export const TechDetails = ({ traineeInfo }: Props) => {
  const {
    courseCompletion,
    courseEngagment,
    projectDegree,
    teamProjectDegree,
    expectedTypeWork,
    targetWorkCity,
    expectedContractType,
    expectedSalary,
    canTakeApprenticeship,
    monthsOfCommercialExp,
    education,
    courses,
    workExperience,
    portfolioUrls,
    projectUrls,
  } = traineeInfo;

  return (
    <section className={classes.TechDetails}>
      <TechInfo title="Oceny" cards>
        <NoteCard title="Ocena przejścia kursu" note={courseCompletion} />
        <NoteCard
          title="Ocena aktywności i zaangażowania na kursie"
          note={courseEngagment}
        />
        <NoteCard title="Ocena kodu w projekcie własnym" note={projectDegree} />
        <NoteCard
          title="Ocena pracy w zespole w Scrum"
          note={teamProjectDegree}
        />
      </TechInfo>
      <TechInfo title="Oczekiwanie w stosunku do zatrudnienia" cards>
        <PreferencesCard
          title="Preferowane miejsce pracy"
          value={expectedTypeWork}
        />
        <PreferencesCard
          title="Docelowe miasto, gdzie chce pracować kandydat"
          value={targetWorkCity}
          flex={1.2}
        />
        <PreferencesCard
          title="Oczekiwany typ kontraktu"
          value={expectedContractType}
        />
        <PreferencesCard
          title="Oczekiwane wynagrodzenie miesięczne netto"
          value={expectedSalary + "zł"}
          flex={1.2}
        />
        <PreferencesCard
          title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek"
          value={canTakeApprenticeship}
          flex={1.4}
        />
        <PreferencesCard
          title="Komercyjne doświadczenie w programowaniu"
          value={monthsOfCommercialExp}
          flex={1.2}
        />
      </TechInfo>
      <TechInfo title="Edukacja">{education}</TechInfo>
      <TechInfo title="Kursy">{courses}</TechInfo>
      <TechInfo title="Doświadczenie zawodowe">{workExperience}</TechInfo>
      <TechInfo title="Portfolio">
        {portfolioUrls && portfolioUrls.length > 0 ? (
          portfolioUrls.map((url, i) => (
            <ExternalLink href={url} icon="web" key={i} />
          ))
        ) : (
          <p className={classes.noLink}>Użytkownik jeszcze nie podał linków</p>
        )}
      </TechInfo>
      <TechInfo title="Projekt na zaliczenie">
        {projectUrls && projectUrls.length > 0 ? (
          projectUrls.map((url, i) => (
            <ExternalLink href={url} icon="web" key={i} />
          ))
        ) : (
          <p className={classes.noLink}>Użytkownik jeszcze nie podał linków</p>
        )}
      </TechInfo>
    </section>
  );
};
