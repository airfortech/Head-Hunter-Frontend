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
      <Scrollbars autoHide style={{ width: '100%', height: '100vh' }}>
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/hr" element={<HRView />} />
          <Route path="/cv" element={<CVView />} />
        </Routes>
      </Scrollbars>
    </div>
  );
};
