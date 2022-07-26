import React from 'react';
import { TechInfo } from './TechInfo/TechInfo';
import { ExternalLink } from '../ExternalLink/ExternalLink';
import { PreferencesCard } from '../PreferencesCard/PreferencesCard';
import classes from './TechDetails.module.css';
import { NoteCard } from '../NoteCard/NoteCard';

export const TechDetails = () => {
  return (
    <section className={classes.TechDetails}>
      <TechInfo title="Oceny" cards>
        <NoteCard title="Ocena przejścia kursu" note={5} />
        <NoteCard title="Ocena aktywności i zaangażowania na kursie" note={4} />
        <NoteCard title="Ocena kodu w projekcie własnym" note={5} />
        <NoteCard title="Ocena pracy w zespole w Scrum" note={5} />
      </TechInfo>
      <TechInfo title="Oczekiwanie w stosunku do zatrudnienia" cards>
        <PreferencesCard title="Preferowane miejsce pracy" value="Biuro" />
        <PreferencesCard
          title="Docelowe miasto, gdzie chce pracować kandydat"
          value="Warszawa"
          flex={1.2}
        />
        <PreferencesCard
          title="Oczekiwany typ kontraktu"
          value="Umowa o pracę"
        />
        <PreferencesCard
          title="Oczekiwane wynagrodzenie miesięczne netto"
          value="8000 zł"
          flex={1.2}
        />
        <PreferencesCard
          title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek"
          value="TAK"
          flex={1.4}
        />
        <PreferencesCard
          title="Komercyjne doświadczenie w programowaniu"
          value="6 miesięcy"
          flex={1.2}
        />
      </TechInfo>
      <TechInfo title="Edukacja">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla sit
        voluptas id odio error tempora suscipit assumenda consequatur
        necessitatibus. Adipisci nisi est libero dolores saepe dignissimos modi
        quaerat alias a.
      </TechInfo>
      <TechInfo title="Kursy">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        assumenda? Porro sint harum hic reiciendis sapiente itaque minus, ad
        rem. Praesentium sunt culpa dicta. Maxime, provident necessitatibus!
        Quam, praesentium nostrum.
      </TechInfo>
      <TechInfo title="Doświadczenie zawodowe">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
        aspernatur harum temporibus quasi at, neque fuga quisquam unde, illum
        pariatur, sunt laudantium error tempora quod delectus. Aperiam non
        dignissimos quod.
      </TechInfo>
      <TechInfo title="Portfolio">
        <ExternalLink href="https://loremipsum/dolor/sit/amet" icon="web" />
      </TechInfo>
      <TechInfo title="Projekt w zespole Scrumowym">
        <ExternalLink
          href="https://github.com/Ami777/MegaKursTest/commits?author=Ami777"
          icon="web"
        />
        <ExternalLink
          href="https://github.com/Ami777/MegaKursTest/pulls?q=is%3Apr+reviewed-by%3AAmi777"
          icon="web"
        />
      </TechInfo>
      <TechInfo title="Projekt na zaliczenie">
        <ExternalLink href="https://Loremipsum/dolor/sit/amet" icon="web" />
        <ExternalLink href="https://Loremipsum/dolor/sit/amet" icon="web" />
      </TechInfo>
    </section>
  );
};
