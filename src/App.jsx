import PokemonCard from './components/PokemonCard';
import { useState } from 'react';
import NavBar from './components/NavBar';

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
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

  const handlePrevious = () => {
    setPokemonIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };
  const handleNext = () => {
    setPokemonIndex((prevIndex) => (prevIndex < pokemonList.length - 1 ? prevIndex + 1 : prevIndex));
  };


  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar handlePrevious={handlePrevious}
        handleNext={handleNext}
        pokemonIndex={pokemonIndex}
        pokemonListLength={pokemonList.length}
      />

    </>
  );
}

export default App;
