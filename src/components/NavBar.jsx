import PropTypes from "prop-types";
import "../assets/styles/NavBar.css";
import pokemonArray from "../assets/data/pokemon.json";

function NavBar({ setPokemonIndex }) {
  /* console.log(pokemonIndex);
  console.log(setPokemonIndex); */
  const handleClick = (index) => {
    setPokemonIndex(index);
  };
  return (
    <nav>
      <h1>Navigation</h1>
      {pokemonArray &&
        pokemonArray.map((p, index) => {
          return (
            <button key={p.id} onClick={() => handleClick(index)}>
              {p.name}
            </button>
          );
        })}
    </nav>
  );
}

NavBar.propTypes = {
  /* pokemonIndex: PropTypes.number.isRequired, */
  setPokemonIndex: PropTypes.func.isRequired,
};

export default NavBar;
