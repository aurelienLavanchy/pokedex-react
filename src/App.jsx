import PokemonCard from "./components/PokemonCard";
import "./assets/styles/App.css";

function App() {
  return (
    <div>
      <blockquote>
        Design copied from
        <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page"> Bulbapedia</a>
      </blockquote>
      <PokemonCard />
    </div>
  );
}

export default App;
