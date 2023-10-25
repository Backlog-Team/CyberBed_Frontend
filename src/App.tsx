import React, { useState } from 'react';
import './App.css';
import { MainBlock } from './components/MainBlock/MainBlock';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
        {/* public routes */}
        <Route path='' element={<MainBlock />} />

        {/* protected routes */}

    </Routes>
  );
}

export default App;
