import PropTypes from "prop-types";
import "../assets/styles/NavBar.css";

function NavBar({ handlePrevious, handleNext }) {
  return (
    <nav>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </nav>
  );
}

NavBar.propTypes = {
  handlePrevious: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default NavBar;
