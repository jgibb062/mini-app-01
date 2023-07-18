import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import ActorList from './components/actorList';

function App() {


  return (
    <div>
    <Routes>
      <Route path='/movies' element={<MovieList />} />
      <Route path='/actors' element={<ActorList />} />
    </Routes>

    <div>
      <h1>
        Hello nowhere!
      </h1>
    </div>
  
    </div>
  );
}

export default App;