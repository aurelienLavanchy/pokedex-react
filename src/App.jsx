import PokemonCard from "./components/PokemonCard";
import "./assets/styles/App.css";
import pokemon from "./assets/data/pokemon.json";

// Array of (Pokemon) objects
function App() {
  console.log(pokemon);
  return (
    <div>
      <blockquote>
        Design of the cards copied from
        <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page"> Bulbapedia</a>
      </blockquote>
      <div className="cardList">
        {pokemon && pokemon.map((p) => <PokemonCard key={p.id} image={p.image} name={p.name} />)}
      </div>
    </div>
  );
}

export default App;
