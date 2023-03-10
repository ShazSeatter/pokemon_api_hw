import React, {useState, useEffect} from 'react'; 
import PokemonList from '../components/PokemonList';

const PokemonContainerBox = function () {
    const [pokemons, setPokemons] = useState([]);

    // the info we need is in the second url thats in the original API call 
    // promise 
    const getPokemon = async function () {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=40')
        const data = await response.json();
        const promises = data.results.map(async pokemon => {
            const secondResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            const singlePokemonData = await secondResponse.json();
            return singlePokemonData;
        })
        const results = await Promise.all(promises)
        setPokemons(results)
        console.log(results)
    }

    useEffect(() => {
        getPokemon();
    },[])
    console.log(pokemons)
    return (
       <section>

        <PokemonList pokemons={pokemons}/>

       </section>
    )
}

export default PokemonContainerBox; 