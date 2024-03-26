import styles from "../assets/styles/PokemonCard.module.css";

// CSS classes
const generalClasses = `${styles.grassType} ${styles.outsideBorder}`;
const inner = `${styles.grassTypeInner}`;
const contentText = `${styles.grassTypeContent} ${styles.name}`;
const contentImg = `${styles.grassTypeContent} ${styles.illustration}`;
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

function PokemonCard() {
  const pokemon = { name: PokemonList[1].name, image: PokemonList[1].image };
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
