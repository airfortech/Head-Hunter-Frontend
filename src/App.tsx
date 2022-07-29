import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Scrollbars from 'react-custom-scrollbars-2';
import { LoginView } from './views/LoginView/LoginView';
import { HRView } from './views/HRView/HRView';
import { CVView } from './views/CVView/CVView';
import classes from './App.module.css';

export const App = () => {
  return (
    <div className={classes.App}>
      <Scrollbars
        className={classes.scrollbar}
        autoHide
        autoHideTimeout={3000}
        autoHideDuration={300}
        renderThumbVertical={(props) => (
          <div {...props} className={classes.ThumbVertical} />
        )}
        renderThumbHorizontal={(props) => (
          <div {...props} className={classes.ThumbHorizontal} />
        )}
      >
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/hr" element={<HRView />} />
          <Route path="/cv" element={<CVView />} />
        </Routes>
      </Scrollbars>
    </div>
  );
};
