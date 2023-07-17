import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import ActorList from './components/actorList';

function App() {


  return (
    <Routes>
      <Route path='/movies' element={<MovieList />} />
      <Route path='/actors' element={<ActorList />} />
    </Routes>
  );
}

export default App;