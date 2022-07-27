import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginView } from './views/LoginView/LoginView';
import { HRView } from './views/HRView/HRView';
import { CVView } from './views/CVView/CVView';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/hr" element={<HRView />} />
        <Route path="/cv" element={<CVView />} />
      </Routes>
    </div>
  );
};
