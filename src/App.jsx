import PokemonCard from "./components/PokemonCard";
import "./assets/styles/App.css";

// Array of (Pokemon) objects
const PokemonList = [
  {
    name: "Bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
  },
];

function App() {
  return (
    <div>
      <blockquote>
        Design copied from
        <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page"> Bulbapedia</a>
      </blockquote>
      <PokemonCard pokemon={PokemonList[0]} />
    </div>
  );
}

export default App;
