import React, {useState, useEffect} from 'react'; 
import PokemonList from '../components/PokemonList';
import PokemonDetails from '../components/PokemonDetails';

const PokemonContainerBox = function () {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSeletedPokemon] = useState(null);

    // the info we need is in the second url thats in the original API call 
    // promise 
    const getPokemon = async function () {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
        const data = await response.json();
        console.log(data.results)
        const promises = data.results.map(async pokemon => {
            const secondResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            const singlePokemonData = await secondResponse.json();
            return singlePokemonData;
        })
        const results = await Promise.all(promises)
        setPokemons(results)
        setSeletedPokemon(results[0])
        console.log(results)
    }

    useEffect(() => {
        getPokemon();
    },[])

    const handleSelectedPokemon = (pokemon) => {
        setSeletedPokemon(pokemon)
    }

    return (
        <main className="main-pokemon-box-container">
            <header className="title-headers">
            <h2 className="pokemon-list-title">PokemonList</h2>
            <h2 className="pokemon-detail">Chosen Pokemon</h2>
            </header>
            <section className="pokemon-list-section">
                <PokemonList pokemons={pokemons} onPokemonClicked={handleSelectedPokemon} selectedPokemon={selectedPokemon}/>
            </section>
            {/* <section>
                <PokemonDetails pokemon={selectedPokemon}/>
            </section> */}
       </main>
    )
}

export default PokemonContainerBox; 