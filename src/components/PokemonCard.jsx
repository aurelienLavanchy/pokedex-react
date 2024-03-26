import styles from "../assets/styles/PokemonCard.module.css";
import PropTypes from "prop-types";

// CSS classes
const generalClasses = `${styles.grassType} ${styles.outsideBorder}`;
const inner = `${styles.grassTypeInner}`;
const contentText = `${styles.grassTypeContent} ${styles.name}`;
const contentImg = `${styles.grassTypeContent} ${styles.illustration}`;

function PokemonCard({ pokemon }) {
  /* const pokemon = { name: "Mew" }; */
  let pokemonImage =
    pokemon.image !== undefined ? <img className={contentImg} src={pokemon.image} /> : <p>???</p>;

  return (
    <article className={generalClasses}>
      <figure className={inner}>
        {pokemonImage}
        <figcaption className={contentText}>{pokemon.name}</figcaption>
      </figure>
    </article>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
  }),
};

export default PokemonCard;
