import axios from 'axios'
import React, { useState, useEffect } from 'react'
import PokemonDisplay from './PokemonDisplay'

const CatchPokemon = () => {
    const [pokemon, setPokemon] = useState()

    const pokemonAxios = () =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
        .then(response => {
            console.log(response.data)
            setPokemon(response.data.results)
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <button onClick={pokemonAxios}>Fetch That Pokemon</button>

            {
                pokemon?
                <PokemonDisplay pokemon = {pokemon} />:
                <h1>Fetch a Pokemon by clicking the button</h1>
            }
        </div>

    )
}

export default CatchPokemon