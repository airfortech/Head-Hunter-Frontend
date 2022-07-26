import React from 'react';
import { TechInfo } from './TechInfo/TechInfo';
import classes from './TechDetails.module.css';
import { ExternalLink } from '../ExternalLink/ExternalLink';

export const TechDetails = () => {
  return (
    <section className={classes.TechDetails}>
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
