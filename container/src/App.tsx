import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  console.log('render')

  return (
      <Routes>
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
  );
};

export default App
