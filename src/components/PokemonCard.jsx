import styles from "../assets/styles/PokemonCard.module.css";
import PropTypes from "prop-types";

function PokemonCard({ image, name }) {
  return (
    <article className={`${styles.grassType} ${styles.outsideBorder} ${styles.content}`}>
      <figure className={`${styles.grassTypeInner}`}>
        {image !== undefined ? (
          <img className={`${styles.grassTypeContent} ${styles.illustration}`} src={image} />
        ) : (
          <p className={styles.undefined}>???</p>
        )}
        <figcaption className={`${styles.grassTypeContent} ${styles.name}`}>{name}</figcaption>
      </figure>
    </article>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default PokemonCard;
