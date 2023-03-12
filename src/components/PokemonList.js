import React from "react";
import PokemonDetails from "./PokemonDetails";
import PokemonItem from "./PokemonItem";

const PokemonList = function ({pokemons, selectedPokemon, onPokemonClicked}) {
    const capitalize = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    const pokemonComponent = pokemons.map((pokemon, index) => {
        return <PokemonItem key={pokemon.id} index={index} pokemon={pokemon} onPokemonClicked={onPokemonClicked} capitalize={capitalize}/>
        // <li className="pokemon-list-component" key={pokemon.id} onClick={()=> onSelectedPokemon(pokemon)}>{pokemon.name}</li>
    });


    return (
        <>
        <ul className="pokemon-component">
            {/* PokemonItems Component */}
            {pokemonComponent}
        </ul>
        {selectedPokemon ? <PokemonDetails pokemon={selectedPokemon} capitalize={capitalize}/> : null}

        </>
    )
}

export default PokemonList;