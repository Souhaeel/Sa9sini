import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign_in from './components/Sign_in'
import Sign_up from './components/Sign_up'
import ProfilePage from './components/ProfilePage'
import OneQuestion from './components/OneQuestion'
import MainPage from './components/MainPage'
import NavBar from './components/NavBar';

import "./App.css";

function App() {

  return (
    <div className={`container-fluid ${theme}`}>
      <BrowserRouter>
        <Routes>
          <Route path='/Sign_in' element={<Sign_in />} />
          <Route path='/Sign_up' element={<Sign_up />} />
          <Route path='/ProfilePage' element={<ProfilePage />} />
          <Route path='/OneQuestion' element={<OneQuestion />} />
          <Route path='/mainPage' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
