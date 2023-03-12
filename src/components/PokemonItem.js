import React from 'react';

const PokemonItem = function({pokemon, onPokemonClicked, capitalize}) {


    const handleClick = function () {
        onPokemonClicked(pokemon)
    }

    return (
        <>
            <li>
                <h3 className="list-pokemon-title" onClick={handleClick}>{capitalize(pokemon.name)}</h3>
            </li>
        </>
    )
}

export default PokemonItem; 