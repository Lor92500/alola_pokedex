import { useState } from "react";

const NavBar = ({ pokemonList, onPokemonSelect, pokemonIndex }) => {
    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <button
                    key={index}
                    onClick={() => {
                        // console.log("Pokemon clicked:", pokemon.name);
                        if (pokemon.name === 'pikachu') {
                            alert("pika pikachu !!!");
                        }
                        onPokemonSelect(index);
                    }}
                >
                    {pokemon.name}
                </button>
            ))}
        </div>
    );
};


export default NavBar;