import React from 'react';
import { MonsterSelector } from './components/MonsterSelector';

import './App.sass';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Monster Roster</h1>
        <p>A Pokemon planning tool</p>
      </header>
      <MonsterSelector />
    </div>
  );
}

export default App;
