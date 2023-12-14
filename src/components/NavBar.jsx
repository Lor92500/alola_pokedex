import { useState } from "react";

function NavBar({ handlePrevious, handleNext, pokemonIndex, pokemonListLength }) {

    return (
        <div>
            {pokemonIndex > 0 && <button onClick={handlePrevious}>Précédent</button>}
            {pokemonIndex < pokemonListLength - 1 && <button onClick={handleNext}>Suivant</button>}
        </div>
    )
}


export default NavBar;