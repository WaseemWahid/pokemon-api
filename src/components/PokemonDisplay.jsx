import React from "react";

const PokemonDisplay = (props) => {
    const { pokemon } = props

    return (
        <div>
            {
                pokemon.map((p, i) => {
                    return (
                        <div key={i}>
                                <li>{p.name}</li>
                        </div>)
                })
            }
        </div>
    )
}
export default PokemonDisplay