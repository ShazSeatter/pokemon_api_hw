import React from 'react';
import pokeball from "./img/pokeball.png" 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pokeball}/>
        <h1>Gotta Catch'em All</h1>
      </header>
    </div>
  );
}

export default App;
