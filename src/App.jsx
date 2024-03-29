import PokemonCard from "./components/PokemonCard";
import "./assets/styles/App.css";
import pokemonList from "./assets/data/pokemon.json";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div className="container">
      <blockquote>
        Design of the cards copied from
        <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page"> Bulbapedia</a>
      </blockquote>
      <NavBar setPokemonIndex={setPokemonIndex} />
      <div className="cardList">
        {
          <PokemonCard
            key={pokemonList[pokemonIndex].id}
            image={pokemonList[pokemonIndex].image}
            name={pokemonList[pokemonIndex].name}
          />
        }
      </div>
    </div>
  );
}

export default App;
