import React, {useState} from "react";
import PokemonDetails from "./PokemonDetails";
import PokemonItem from "./PokemonItem";

const PokemonList = function ({pokemons, selectedPokemon, onPokemonClicked}) {



    const capitalize = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }


    const pokemonComponent = pokemons.map((pokemon, index) => {
        return <PokemonItem key={pokemon.id} index={index} pokemon={pokemon} onPokemonClicked={onPokemonClicked} capitalize={capitalize}/>
    });


    return (
        <>
        <section className="pokemon-list-section">
        <ul className="pokemon-component">
            {/* PokemonItems Component */}
            {pokemonComponent}
        </ul>
        {selectedPokemon ? <PokemonDetails pokemon={selectedPokemon} capitalize={capitalize}/> : null}
        </section>
        </>
    )
}

export default PokemonList;