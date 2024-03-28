import PokemonCard from "./components/PokemonCard";
import "./assets/styles/App.css";
import pokemon from "./assets/data/pokemon.json";
import { useState } from "react";
import NavBar from "./components/NavBar";

/* {pokemon && pokemon.map((p) => <PokemonCard key={p.id} image={p.image} name={p.name} />)} */

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleNextClick = () => {
    pokemonIndex < pokemon.length - 1 ? setPokemonIndex(pokemonIndex + 1) : null;
  };
  const handlePreviousClick = () => {
    pokemonIndex > 0 ? setPokemonIndex(pokemonIndex - 1) : null;
  };

  return (
    <div className="container">
      <blockquote>
        Design of the cards copied from
        <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page"> Bulbapedia</a>
      </blockquote>
      <NavBar handleNext={handleNextClick} handlePrevious={handlePreviousClick} />
      <div className="cardList">
        {
          <PokemonCard
            key={pokemon[pokemonIndex].id}
            image={pokemon[pokemonIndex].image}
            name={pokemon[pokemonIndex].name}
          />
        }
      </div>
    </div>
  );
}

export default App;
