import React from 'react';


const PokemonDetails = function ({pokemon, capitalize}) {

    const pokemonAbilites = pokemon.abilities.map((ability, index)=> {
        return <p key={index}>{ability.ability.name}</p>
    })

    const pokemonType = pokemon.types.map((type, index)=> {
        return <p key={index}>{type.type.name}</p>
    })
    return (
        <>
        <div className="pokemon-detail">
            <div className="pokemon-card">
            <h2>{capitalize(pokemon.name)}</h2> 
            <img className="pokemon-img" src={pokemon.sprites.front_default} alt="pokemon" />
            <p>HEALTH HP: {pokemon.stats[0].base_stat}</p>
            <section>
            <h4 className="abilites-title">Abilites</h4>
            <div className="pokemon-abilities-list">
                {pokemonAbilites}
            </div>
            
            <div className="pokemon-types-list">
            <h4 className="types-title">Types:</h4>
                {pokemonType}
            </div>
            </section>
            </div>
        </div>
        </>
    )
}

export default PokemonDetails; 