import styles from "../assets/styles/PokemonCard.module.css";

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

export default PokemonCard;
