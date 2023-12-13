import React from 'react';
import PokemonCard from './components/PokemonCard';
import { useState } from 'react';

const App = () => {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePrevious = () => {
    setPokemonIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };
  const handleNext = () => {
    setPokemonIndex((prevIndex) => (prevIndex < pokemonList.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const pokemonData = pokemonList[pokemonIndex];

  return (
    <div className='App'>
      {pokemonIndex > 0 && (
        <button onClick={handlePrevious}>Précédent</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleNext}>Suivant</button>
      )}

      {pokemonData.imgSrc && <img src={pokemonData.imgSrc} alt={pokemonData.name} />}
    </div>
  );
}

export default App;
