import React from 'react';
import { Monster } from './features/monster';

import './App.sass';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Monster Roster</h1>
        <p>A Pokemon planning tool</p>
      </header>
      <Monster />
    </div>
  );
}

export default App;
