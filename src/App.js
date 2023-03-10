import React from 'react';
import pokeball from "./img/pokeball.png" 
import './App.css';
import PokemonContainerBox from './containers/PokemonContainerBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pokeball}/>
        <h1>Gotta Catch'em All</h1>
      </header>
      <PokemonContainerBox/>

      
      <footer>
        <a href="https://www.flaticon.com/free-icons/pokemon" title="pokemon icons">Pokemon icons created by Nikita Golubev - Flaticon</a>
      </footer>
    </div>
  );
}

export default App;
