import { useState } from "react";

const NavBar = ({ pokemonList, onPokemonSelect }) => {
    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <button key={index} onClick={() => onPokemonSelect(index)}> {pokemon.name}</button>
            ))
            }
        </div >
    );
};


export default NavBar;