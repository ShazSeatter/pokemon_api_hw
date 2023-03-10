import React from "react";

const PokemonList = function ({pokemons}) {
    const pokemonComponent = pokemons.map((pokemon) => {
        return <li className="pokemon-list-component"key={pokemon.id}>{pokemon.name}</li>
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