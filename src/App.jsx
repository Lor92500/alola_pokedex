import React from 'react';
import PokemonCard from './components/PokemonCard';

const App = () => {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ]
  const pokemonData = pokemonList[0];

  return (
    <div>
      <PokemonCard pokemon={pokemonData} />
    </div>
  );
};

export default App
