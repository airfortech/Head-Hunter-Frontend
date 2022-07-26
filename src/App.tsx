import React from 'react';
import { LoginView } from './views/LoginView/LoginView';
import { HRView } from './views/HRView/HRView';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/hr" element={<HRView />} />
      </Routes>
    </div>
  );
};
