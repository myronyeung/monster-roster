import React from 'react';
import MonsterView from './features/monsterView';

import './App.sass';

const App:React.FunctionComponent = () => {
  return (
    <div className="App">
      <header>
        <h1>Monster Roster</h1>
        <p>A Pokemon planning tool</p>
      </header>
      <MonsterView />
    </div>
  );
}

App.displayName = 'App';

export default App;
