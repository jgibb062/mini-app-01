import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';




function App() {


  return (
    <div >
      <MovieList />
    </div>
  );
}

export default App;
