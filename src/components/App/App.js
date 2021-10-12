import React from 'react';
import Header from '../Header';
import AnimeList from '../AnimeList';

import './App.css';

const App = () => {
  return (
    <main role='main' className='container'>
      <Header />
      <AnimeList />
    </main>
  );
};

export default App;
