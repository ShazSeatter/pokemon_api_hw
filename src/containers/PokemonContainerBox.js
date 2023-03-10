import React, {useState, useEffect} from 'react'; 
import PokemonList from '../components/PokemonList';

const PokemonContainerBox = function () {
    const [pokemons, setPokemons] = useState([]);


    // the info we need is in the second url thats in the original API call 
    // promise 
    const getPokemon = async function () {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
        const data = await response.json();
        console.log(data.next)
        console.log(data.results)
        const promises = data.results.map(async pokemon => {
            const secondResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            const singlePokemonData = await secondResponse.json();
            return singlePokemonData;
        })
        const results = await Promise.all(promises)
        setPokemons(results)

    }

    useEffect(() => {
        getPokemon();
    },[])

    return (
        <main className="main-pokemon-box-container">
            <section className="pokemon-list-section">
                <PokemonList pokemons={pokemons}/>
            </section>
            {/* <section className="button-section-prev-next">
                <Buttons 
                    text="Previous"
                    handleClick={() => {getPokemon(previous)}}
                    isDisabled={previous === null}
                />
                <Buttons
                    text="Next"
                    handleClick={() => {getPokemon(next)}}
                    isDisabled={next === null}
                />
            </section> */}
       </main>
    )
}

export default PokemonContainerBox; 