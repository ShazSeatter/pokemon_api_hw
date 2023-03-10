import React from "react";
import PokemonDetails from "./PokemonDetails";

const PokemonList = function ({pokemons}) {
    const pokemonComponent = pokemons.map((pokemon) => {
        return <PokemonDetails key={pokemon.id} pokemon={pokemon}/>
    })


    return (
        <>
        <h2>PokemonList</h2>
        <ul>
            {pokemonComponent}
        </ul>
        
        </>
    )
}

export default PokemonList; 