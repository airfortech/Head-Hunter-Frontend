import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginView } from './views/LoginView/LoginView';
import { CVView } from './views/CVView/CVView';
import { StudentsListView } from './views/StudentsListView/StudentsListView';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/students" element={<StudentsListView />} />
        <Route path="/cv" element={<CVView />} />
      </Routes>
    </div>
  );
};
