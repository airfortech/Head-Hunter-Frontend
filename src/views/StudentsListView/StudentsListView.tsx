import React from 'react';
import { Header } from '../../components/Header/Header';
import { TabsNavigation } from '../../components/TabsNavigation/TabsNavigation';
import classes from './StudentsListView.module.css';

export const StudentsListView = () => {
  return (
    <div className={classes.StudentsListView}>
      <Header />
      <div className={classes.wrapper}>
        <TabsNavigation
          routes={[
            { anchor: 'Dostępni kursanci', route: '/students' },
            { anchor: 'Do rozmowy', route: '/test' },
          ]}
        />
      </div>
    </div>
  );
};
